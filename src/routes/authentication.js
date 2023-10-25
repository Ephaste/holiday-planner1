import express from "express";
import {login} from "../controllers/authentication";
import { signup } from "../controllers/authentication";
import { logger } from "../middleware";
import {changePassword} from "../controllers/authentication";
//import {getBill,signup} from "../controllers/authentication";
//import{}


const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup",logger,signup);
authRouter.post("/changePassword", changePassword);


export default authRouter;
