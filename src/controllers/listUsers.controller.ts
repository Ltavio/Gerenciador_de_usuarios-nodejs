import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import { instanceToPlain } from "class-transformer";
import listUsersServices from "../services/users/listUser.service";

const listUsersController = async (req: Request, res: Response) => {
  const listUsers = await listUsersServices();
  return res.json(instanceToPlain(listUsers));
};

export default listUsersController;
