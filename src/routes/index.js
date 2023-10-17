import express from "express";
import usersRouter from "./users";
import authRouter from "./authentication";
import toursRouter from "./tours";


const mainRouter = express.Router();

//Modules in our server
mainRouter.use("/auth", authRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/tours",toursRouter);


export default mainRouter;