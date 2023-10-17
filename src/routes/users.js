
import express  from "express";
import { verifyToken, isAdmin } from "../middleware";
const usersRouter = express.Router();

import {getAll,addnew, getbyId} from "../controllers/crud";

//usersRouter.use(verifyToken);
usersRouter.get("/", getAll);
usersRouter.post("/", addnew);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 usersRouter.get("/:id",isAdmin, getbyId);
// studentsRouter.put("/:id",UpdateData);

export default usersRouter;
              
//module.exports =studentsRouter; 