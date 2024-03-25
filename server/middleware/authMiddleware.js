import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import CatchAsyncError from "./catchAsyncError.js"
import ErrorHandler from "../utils/errorHandler.js";
import dotenv from "dotenv";
dotenv.config();

export const isAuthenticated = CatchAsyncError(async (req, res, next) => {
  const access_token = req.cookies.access_token;
  if (!access_token) {
    return next(new ErrorHandler(400, "Please login to access this resource"));
  }

  const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);

  if (!decoded) {
    return next(new ErrorHandler(400, "Access token is not valid!"));
  }

  req.user = JSON.parse(user);
  next();
});

export const checkRole = (roles) => {
  return async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await Admin.findOne({ _id: decoded.userId }).select(
          "role"
        );
        const adminRole = admin ? admin.role : null;
        if (admin && roles.includes(adminRole)) {
          next();
        } else {
          return res.status(401).send("Forbidden");
        }
      } catch (error) {
        return res.status(401).send("Not Authorized");
      }
    } else {
      return res.status(401).send("Not Authorized, No Token");
    }
  };
};