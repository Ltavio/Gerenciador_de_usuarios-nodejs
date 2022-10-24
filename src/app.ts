import "reflect-metadata";
import express from "express";
import usersRouter from "./routers/users.routes";
import sessionRouter from "./routers/session.routes";

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/login", sessionRouter);

export default app;
