import { Request, Response } from "express";
import deleteUserService from "../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const user = await deleteUserService(id);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
};

export default deleteUserController;
