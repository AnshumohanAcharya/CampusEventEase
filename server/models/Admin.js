import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const AdminSchema = new mongoose.Schema({
  email:{
    type:String,
    required: true,
    max: 50,
    unique: true,
  },
  password:{
    type:String,
    required: true,
    min: 5
  },
  name:{
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  role:{
    type:String,
    enum: ['admin', 'convenor', 'member'],
    default: 'admin'
  },
  committeeName:{
    type: String,
    required: true,
  },
  committeeId:{
    type: String,
    required: true,
  },
  mobile:{
    type: String,
    required: true,
  }
}, { timestamps: true });

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

AdminSchema.methods.SignAccessToken = function () {
  try {
    return jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN || "", {
      expiresIn: "5m",
    });
  } catch (error) {
    throw new Error("Error signing access token");
  }
};

AdminSchema.methods.SignRefreshToken = function () {
  try {
    return jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN || "", {
      expiresIn: "7d",
    });
  } catch (error) {
    throw new Error("Error signing refresh token");
  }
};

AdminSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);

export default Admin;