import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import updateUserService from "../services/users/updateUser.service";
import User from "../entities/user.entity";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserUpdate = req.body;
    const id: string = req.params.id;
    const userUpdate = await updateUserService(data, id);
    if (userUpdate instanceof User) {
      return res.json(userUpdate);
    }
    return res.status(userUpdate[0] as number).json({
      message: userUpdate[1],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

export default updateUserController;
