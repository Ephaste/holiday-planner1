
import express  from "express";
import { isAdmin } from "../middleware";
const toursRouter = express.Router();

import {getAllt,addnewt, getbyIdt} from "../controllers/crud";



//usersRouter.use(verifyToken);
toursRouter.get("/", getAllt);
toursRouter.post("/", addnewt);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 toursRouter.get("/:id",isAdmin, getbyIdt);
// studentsRouter.put("/:id",UpdateData);

export default toursRouter;
              
//module.exports =studentsRouter; 