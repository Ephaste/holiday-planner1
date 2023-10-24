import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";

///import "dotenv/config";
import dotenv from "dotenv"
dotenv.config();
import { logger } from "./src/middleware/logger";
import mongoose from "mongoose";
import usersRouter from "./src/routes";
import toursRouter from "./src/routes";
import contactsRouter from "./src/routes";
import testimoniesRouter from "./src/routes";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import bookingsRouter from "./src/routes";
import authRouter from "./src/routes";
 import mainRouter from "./src/routes";
 //const low =require("lowdb");
 
const app =express();
app.use(bodyParser.json());
app.use(cors())
app.use(morgan("dev"))
app.use(logger);
app.use("/tours", toursRouter)
app.use("/users", usersRouter);
app.use("/auth",authRouter);
app.use("/bookings", bookingsRouter);
app.use("/contacts", contactsRouter);
app.use("/testimonies",testimoniesRouter);
app.use(mainRouter);
//pp.db =db;
// const fileSync = require("lowdb/adapters/fileSync");
// const adapter = new fileSync("db.json");
//  const db = low(adapter)

let port = 3000;
const options = {
  swaggerDefinition: {
    openapi : "3.0.0",
    info: {
      title: "HOLIDAY PLANNERS",
      version :"1.0.0",
      description: "A simple Express API",
    },
    servers: [  
      {
        url: "http://localhost:3000"
      }
    ],
    
    } ,
    apis: ["./src/routes/*.js"],
  }
  // Define the 'apis' array here within 'swaggerOptions'
   // Specify the path to your API route files

const specs = swaggerJSDoc(options)

const swaggerDocs = swaggerJSDoc(options);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs))
 


console.log(process.env.DB_CONNECTION_DEV);
mongoose.connect(process.env.DB_CONNECTION_DEV).then((res) =>{
    console.log("Database connected");
});
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});