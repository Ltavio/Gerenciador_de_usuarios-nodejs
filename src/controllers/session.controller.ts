import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import sessionUserService from "../services/sessions/session.service";

const sessionController = async (req: Request, res: Response) => {
  try {
    const data: IUserLogin = req.body;

    const token = await sessionUserService(data);

    return res.json({ token });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(403).json({ message: error.message });
    }
  }
};

export default sessionController;
