import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const ensureIsActiveAuthMiddle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isActive) {
    return res.status(403).json({ message: "inactive user" });
  }

  return next();
};

export default ensureIsActiveAuthMiddle;
