
import express  from "express";
import multer from "multer";

import { verifyToken,logger, isAdmin } from "../middleware";
const usersRouter = express.Router();
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log(req);
        cb(null, "user_assets");
    },
    filename: function(req, file,cb){
        cb(null, file.originalname);
    },
});
const upload = multer({storage,});

import {getAll,addnew, getbyId} from "../controllers/crud";

//usersRouter.use(verifyToken);
usersRouter.get("/", getAll);
usersRouter.post("/",upload.single("image"),logger, addnew);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 usersRouter.get("/:id",isAdmin, getbyId);
// studentsRouter.put("/:id",UpdateData);

export default usersRouter;
              
//module.exports =studentsRouter; 