
import express  from "express";
import multer from "multer";

import { verifyToken,logger, isAdmin } from "../middleware";
const  bookingsRouter = express.Router();
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

import {getAllb,addnewb, getbyIdb} from "../controllers/crud";

//usersRouter.use(verifyToken);
bookingsRouter.get("/", getAllb);
bookingsRouter.post("/",upload.single("image"),logger, addnewb);
// studentsRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 bookingsRouter.get("/:id",isAdmin, getbyIdb);
// studentsRouter.put("/:id",UpdateData);

export default bookingsRouter;
              
//module.exports =studentsRouter; 