
import express  from "express";
import { isAdmin } from "../middleware";
const contactsRouter = express.Router();

import {getAllc,addnewc, getbyIdc,removeDatac } from "../controllers/crud";



//usersRouter.use(verifyToken);
contactsRouter.get("/", getAllc);
contactsRouter.post("/", addnewc);
contactsRouter.delete("/:id",removeDatac);
// studentsRouter.put("/:id",putData);
 contactsRouter.get("/:id",isAdmin, getbyIdc);
// studentsRouter.put("/:id",UpdateData);

export default contactsRouter;
              
//module.exports =studentsRouter; 