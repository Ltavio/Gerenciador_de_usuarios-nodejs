import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import updateUserService from "../services/users/updateUser.service";
import User from "../entities/user.entity";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const data: IUserUpdate = req.body;
    const id: string = req.params.id;
    if (
      req.body.id !== undefined ||
      req.body.isAdm !== undefined ||
      req.body.isActive !== undefined
    ) {
      return res
        .status(401)
        .json({ message: "Cannot edit id, isAdm and isActive" });
    }
    const userUpdate = await updateUserService(data, id, req);
    if (userUpdate instanceof User) {
      return res.json(userUpdate);
    }
    return res.status(userUpdate[0] as number).json({
      message: userUpdate[1],
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({ message: error.message });
    }
  }
};

export default updateUserController;
