import express from "express";
import usersRouter from "./users";
import authRouter from "./authentication";
import toursRouter from "./tours";
import bookingsRouter from "./booking";
import contactsRouter from "./contact";
import testimoniesRouter from "./testimonies";


const mainRouter = express.Router();

//Modules in our server
mainRouter.use("/auth", authRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/tours",toursRouter);
mainRouter.use("/bookings", bookingsRouter);
mainRouter.use("/contacts", contactsRouter);
mainRouter.use("/testimonies", testimoniesRouter);
export default mainRouter;