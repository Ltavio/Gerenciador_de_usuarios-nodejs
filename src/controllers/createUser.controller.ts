import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserRequest = req.body;
    const users = await createUserService(data);

    return res.status(200).json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default createUserController;
