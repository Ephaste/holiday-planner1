
import express  from "express";
import { isAdmin } from "../middleware";
const testimoniesRouter = express.Router();

import {getAllts,addnewts, getbyIdts} from "../controllers/crud";



//usersRouter.use(verifyToken);
testimoniesRouter.get("/", getAllts);
testimoniesRouter.post("/", addnewts);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 testimoniesRouter.get("/:id",isAdmin, getbyIdts);
// studentsRouter.put("/:id",UpdateData);

export default testimoniesRouter;
              
//module.exports =studentsRouter; 