import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const usersRouter = Router();

usersRouter.post("", createUserController);
usersRouter.get(
  "",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  listUsersController
);

export default usersRouter;
