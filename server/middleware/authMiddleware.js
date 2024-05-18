import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
import CatchAsyncError from "./catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
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
    const access_token = req.cookies.access_token;
    if (access_token) {
      try {
        const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN);
        const admin = await Admin.findOne({ _id: decoded.id }).select("role");
        const adminRole = admin ? admin.role : null;
        if (admin && roles.includes(adminRole)) {
          next();
        } else {
          return next(new ErrorHandler(403, "Forbidden"));
        }
      } catch (error) {
        return next(new ErrorHandler(403, "Not Authorized"));
      }
    } else {
      return next(
        new ErrorHandler(403, "Please Login to access this resource")
      );
    }
  };
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role || "")) {
      return next(
        new ErrorHandler(403, "You are not authorized to access this resource")
      );
    }
    next();
  };
};
