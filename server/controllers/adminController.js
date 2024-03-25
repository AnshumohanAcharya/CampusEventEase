import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Admin from "../models/Admin.js";
import Committee from "../models/Committee.js";
import {
  accessTokenOptions,
  refreshTokenOptions,
  sendToken,
} from "../utils/generateToken.js";
import sendMail from "../utils/sendMail.js";
import jwt from "jsonwebtoken";
import path from "path";
import ejs from "ejs";
import CatchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

//@desc     register admin
//@route    POST /admin/register
//@access   Public
export const registerAdmin = CatchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password, role, committeeName, committeeId, mobile } =
      req.body;
    const lcEmail = email.toLowerCase();
    const user = await Admin.findOne({ email: lcEmail });
    if (user) {
      return next(new ErrorHandler(400, "Email already exists"));
    }
    const newAdmin = new Admin({
      email: lcEmail,
      password,
      name,
      role,
      committeeName,
      committeeId,
      mobile,
    });
    console.log(newAdmin);
    const activationToken = createActivationToken(newAdmin);
    const activationCode = activationToken.activationCode;
    const data = {
      user: { name: newAdmin.name },
      activationCode,
    };
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const html = await ejs.renderFile(
      path.join(__dirname, "../mails/activation-mail.ejs"),
      data
    );
    try {
      await sendMail({
        email: newAdmin.email,
        subject: "Account Activation",
        template: "activation-mail.ejs",
        data,
      });
      res.status(201).json({
        success: true,
        message: `An email has been sent to ${newAdmin.email}. Please check your email to activate your account`,
        activationToken: activationToken.token,
      });
    } catch (Error) {
      return next(new ErrorHandler(400, Error.message));
    }
  } catch (error) {
    return next(new ErrorHandler(400, error.message));
  }
});

//Create Activation Code
const createActivationToken = (user) => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
  const token = jwt.sign(
    { user, activationCode },
    process.env.ACTIVATION_SECRET,
    { expiresIn: "5m" }
  );

  return { token, activationCode };
};

//Activate User - Step after Registration
export const activateUser = CatchAsyncError(async (req, res, next) => {
  try {
    const { activation_token, activation_code } = req.body;

    const newUser = jwt.verify(activation_token, process.env.ACTIVATION_SECRET);

    // console.log(newUser)
    if (newUser.activationCode !== activation_code) {
      return next(new ErrorHandler(400, "Invalid activation code"));
    }

    const { email, password, name, role, committeeName, committeeId, mobile } =
      newUser.user;
    const existUser = await Admin.findOne({ email });
    if (existUser) {
      return next(new ErrorHandler(400, "Email already exists!"));
    }

    const user = await Admin.create({
      email,
      password,
      name,
      role,
      committeeName,
      committeeId,
      mobile,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (Error) {
    return next(new ErrorHandler(400, Error.message));
  }
});

//@desc     login user
//@route    POST /admin/login
//@access   Public
export const verifyAdmin = CatchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler(400, "Please enter your email & password"));
    }
    const lcEmail = email.toLowerCase();
    const admin = await Admin.findOne({ email: lcEmail }).select("+password");
    if (!admin) return next(new ErrorHandler(400, "Invalid email or password"));
    const isMatch = await admin.comparePassword(password);
    if (!isMatch)
      return next(new ErrorHandler(400, "Invalid email or password"));
    sendToken(admin, 200, res);
  } catch (err) {
    return next(new ErrorHandler(400, err.message));
  }
});

//@desc     logout user
//@route    GET /admin/logout
//@access   Public
export const logout = CatchAsyncError(async (req, res) => {
  try {
    res.cookie("access_token", "", {
      maxAge: 1,
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.cookie("refresh_token", "", {
      maxAge: 1,
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (Error) {
    return next(new ErrorHandler(400, Error.message));
  }
});

//@desc    update access token
//@route   GET /admin/refresh
//@access  Private
export const updateAccessToken = CatchAsyncError(async (req, res, next) => {
  try {
    const refresh_token = req.cookies.refresh_token;
    if (!refresh_token) {
      return next(
        new ErrorHandler(400, "Please login to access this resource")
      );
    }
    const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN);
    if (!decoded) {
      return next(new ErrorHandler(400, "Refresh token is not valid!"));
    }
    const user = await Admin.findById(decoded.id);
    if (!user) {
      return next(
        new ErrorHandler(400, "Please login to access these resources!")
      );
    }
    const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
      expiresIn: "5m",
    });

    const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN, {
      expiresIn: "3d",
    });

    res.cookie("access_token", accessToken, accessTokenOptions);
    res.cookie("refresh_token", refreshToken, refreshTokenOptions);

    res.status(200).json({
      success: true,
      accessToken,
    });
  } catch (Error) {
    return next(new ErrorHandler(400, Error.message));
  }
});

//@desc  Update user role --Only for admin
//@route PUT /admin/update-user-role
//@access Private{admin}
export const updateUserRole = CatchAsyncError(async (req, res, next) => {
  try {
    const { userId, role } = req.body;
    const user = await Admin.findById(userId);
    if (!user) {
      return next(new ErrorHandler(404, "User does not exist"));
    }
    user.role = role;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Role updated successfully",
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(400, error.message));
  }
});

//@desc     add a new convenor
//@route    POST /admin/addConvenor
//@access   private {admin}
export const addConvenor = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, committeeId, committeeName, role, mobile } =
      req.body;
    const lcEmail = email.toLowerCase();
    const user = await Admin.findOne({ email: lcEmail });
    if (user) {
      return next(new ErrorHandler(400, "Email already exists"));
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const existingConvenor = await Admin.findOne({
        committeeId: committeeId,
      });
      if (existingConvenor) {
        const filterAdmin = { committeeId: committeeId };
        const updateAdmin = {
          email: lcEmail,
          password: passwordHash,
          name,
          role,
          committeeName,
          committeeId,
          mobile,
        };
        const updatedConvenor = await Admin.findOneAndUpdate(
          filterAdmin,
          updateAdmin,
          { new: true }
        );
        const filterCommittee = { _id: committeeId };
        const updateCommittee = {
          convenorName: updatedConvenor.name,
          convenorId: updatedConvenor._id,
        };
        const updatedCommittee = await Committee.findOneAndUpdate(
          filterCommittee,
          updateCommittee,
          { new: true }
        );
        res.status(201).json({ updatedConvenor, updatedCommittee });
      } else {
        const newConvenor = new Admin({
          email: lcEmail,
          password: passwordHash,
          name,
          role,
          committeeName,
          committeeId,
          mobile,
        });
        const savedConvenor = await newConvenor.save();
        const filter = { _id: committeeId };
        const update = {
          convenorName: savedConvenor.name,
          convenorId: savedConvenor._id,
        };
        const updatedCommittee = await Committee.findOneAndUpdate(
          filter,
          update,
          { new: true }
        );
        res.status(201).json({ savedConvenor, updatedCommittee });
      }
    }
  } catch (err) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     get list of convenors
//@route    GET /admin/convenors
//@access   private {admin}
export const getConvenors = async (req, res) => {
  try {
    const convenors = await Admin.find({ role: "convenor" }).select(
      "-password"
    );
    res.status(200).json(convenors);
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     delete a  convenor
//@route    POST /admin/deleteConvenor
//@access   private {admin}
export const deleteConvenor = async (req, res) => {
  try {
    const { convenorId, committeeId } = req.body;
    const deletedConvenor = await Admin.deleteOne({ _id: convenorId });
    if (deletedConvenor) {
      const filter = { _id: committeeId };
      const update = { convenorName: "-", convenorId: "-" };
      const updatedCommittee = await Committee.findOneAndUpdate(
        filter,
        update,
        { new: true }
      );
      res.status(201).json({ msg: "Deleted Successfully" });
    } else {
      return next(new ErrorHandler(500, error.message));
    }
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     add a new member
//@route    POST /admin/addMember
//@access   private {admin,convenor}
export const addMember = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      memberName,
      memberEmail,
      memberPassword,
      committeeId,
      committeeName,
      role,
      mobile,
    } = req.body;
    const lcEmail = memberEmail.toLowerCase();

    const user = await Admin.findOne({ email: lcEmail });
    if (user) {
      res.status(400).json({ msg: "Email already exists" });
    } else {
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(memberPassword, salt);
      const newMember = new Admin({
        email: lcEmail,
        password: passwordHash,
        name: memberName,
        role,
        committeeName,
        committeeId,
        mobile,
      });
      const savedMember = await newMember.save();
      res.status(201).json({ savedMember });
    }
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     get list of members
//@route    GET /admin/members
//@access   private {admin}
export const getMembers = async (req, res) => {
  try {
    const members = await Admin.find({ role: "member" }).select("-password");
    res.status(200).json(members);
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     delete a  member
//@route    POST /admin/deleteMember
//@access   private {admin,convenor}
export const deleteMember = async (req, res) => {
  try {
    const { memberId } = req.body;
    const deletedMember = await Admin.deleteOne({ _id: memberId });
    if (deletedMember) {
      res.status(201).json({ msg: "Deleted Successfully" });
    } else {
      return next(new ErrorHandler(500, error.message));
    }
  } catch (error) {
    return next(new ErrorHandler(500, error.message));
  }
};

//@desc     get list of members of a particular committee
//@route    POST /admin/committeeMembers
//@access   private {convenor, member}
export const getCommitteeMembers = async (req, res) => {
  try {
    const { committeeId } = req.body;
    const filter = { committeeId: committeeId };
    const committeeMembers = await Admin.find(filter).select("-password");
    if (committeeMembers.length === 0) {
      return res.status(404).json({
        message: "No committee members found for the given committee ID",
      });
    }
    res.status(200).json(committeeMembers);
  } catch (error) {
    return next(new ErrorHandler(500, "Something went wrong. Please try again later."));
  }
};

//@desc     changed password
//@route    POST /admin/changePassword
//@access   private {admin, convenor, member}
export const changePassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { currentPassword, newPassword, cNewPassword, userId } = req.body;

    const user = await Admin.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Current Password is Not Valid!" });
    }

    if (newPassword !== cNewPassword) {
      return res.status(400).json({ msg: "New Passwords do not match!" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(newPassword, salt);
    const filter = { _id: userId };
    const update = {
      password: passwordHash,
    };
    const updatedUser = await Admin.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(201).json({ msg: "Password Changed Successfully" });
  } catch (error) {
    return next(new ErrorHandler(500, "Something went wrong. Please try again later."));
  }
};
