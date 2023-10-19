
import express  from "express";
import { isAdmin } from "../middleware";
const bookingsRouter = express.Router();

import {getAllb,addnewb, getbyIdb} from "../controllers/crud";



//usersRouter.use(verifyToken);
bookingsRouter.get("/", getAllb);
bookingsRouter.post("/", addnewb);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 bookingsRouter.get("/:id",isAdmin, getbyIdb);
// studentsRouter.put("/:id",UpdateData);

export default bookingsRouter;
              
//module.exports =studentsRouter; 