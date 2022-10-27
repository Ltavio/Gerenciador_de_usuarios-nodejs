import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureIsAdmAuthMiddle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({ message: "User is not admin" });
  }

  console.log("passou no isAdm");

  return next();
};

export default ensureIsAdmAuthMiddle;
