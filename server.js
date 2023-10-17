import  express  from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { logger } from "./src/middleware/logger";
import mongoose from "mongoose";
import usersRouter from "./src/routes";
import toursRouter from "./src/routes";
import authRouter from "./src/routes";
 import mainRouter from "./src/routes";

const app =express();
app.use(bodyParser.json());
app.use(logger);
app.use("/tours", toursRouter)
app.use("/users", usersRouter);
app.use("/auth",authRouter);
app.use(mainRouter);

let port = 3000;
console.log(process.env.DB_CONNECTION_DEV);
mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) =>{
    console.log("Database connected");
});
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});