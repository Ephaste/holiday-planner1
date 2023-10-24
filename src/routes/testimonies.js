
import express  from "express";
import { isAdmin } from "../middleware";
const testimoniesRouter = express.Router();

import {getAllts,addnewts, getbyIdts, removeDatats} from "../controllers/crud";



//usersRouter.use(verifyToken);
testimoniesRouter.get("/", getAllts);
testimoniesRouter.post("/", addnewts);
 testimoniesRouter.delete("/:id",removeDatats);
// studentsRouter.put("/:id",putData);
 testimoniesRouter.get("/:id",isAdmin, getbyIdts);
// studentsRouter.put("/:id",UpdateData);

export default testimoniesRouter;
              
//module.exports =studentsRouter; 