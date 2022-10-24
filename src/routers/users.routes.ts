import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import ensureAuthMiddle from "../middleware/ensureAuth.middleware";
import ensureIsActiveAuthMiddle from "../middleware/ensureIsActiveAuth.middleware";
import ensureIsAdmAuthMiddle from "../middleware/ensureIsAdmAuth.middleware";

const usersRouter = Router();

usersRouter.post("", createUserController);
usersRouter.get(
  "",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  listUsersController
);
usersRouter.patch("/:id", ensureAuthMiddle, updateUserController);
usersRouter.delete(
  "/:id",
  ensureAuthMiddle,
  ensureIsAdmAuthMiddle,
  ensureIsActiveAuthMiddle,
  deleteUserController
);

export default usersRouter;
