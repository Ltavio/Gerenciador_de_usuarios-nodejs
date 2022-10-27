import { Request, Response } from "express";
import User from "../entities/user.entity";
import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await deleteUserService(id);

    if (user instanceof User) {
      return res.status(204).json(user);
    }

    return res.status(user[0] as number).json({
      message: user[1],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
