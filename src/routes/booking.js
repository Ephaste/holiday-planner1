
import express  from "express";
import { isAdmin } from "../middleware";
const bookingsRouter = express.Router();

import {getAllb,addnewb, getbyIdb,removeDatab} from "../controllers/crud";



//usersRouter.use(verifyToken);
bookingsRouter.get("/", getAllb);
bookingsRouter.post("/", addnewb);
bookingsRouter.delete("/:id",removeDatab);
// studentsRouter.put("/:id",putData);
 bookingsRouter.get("/:id",isAdmin, getbyIdb);
// studentsRouter.put("/:id",UpdateData);

export default bookingsRouter;
              
//module.exports =studentsRouter; 