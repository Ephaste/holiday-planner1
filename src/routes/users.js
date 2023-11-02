
import express  from "express";
import multer from "multer";
//import nanoid from "nanoid";
/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - email
 *         - fullNames
 *         - password
 *         - phoneNumber
 *         - location
 *         - image
 *         - role
 *       properties:
 *         id:
 *           type: string
 *           description: auto generated id
 *         email:
 *           type: string
 *           description: email of the user
 *         fullNames:
 *           type: string
 *           description: The backdrop image for the user
 *         password:
 *           type: string
 *           description: password
 *         phoneNumber:
 *           type: string
 *           description: User's phone number
 *         location:
 *           type: string
 *           description: The location of the user
 *         image:
 *           type: string
 *           format: binary
 *           description: Image of the user
 *         role:
 *           type: string
 *           description: User by default 
 *       example:
 *         id: 2d3f
 *         email: "example@gmail.com"
 *         fullNames: "Ephaste NIYONIZEYE"
 *         password: "123"
 *         phoneNumber: "0780719647"
 *         location: "Kigali, rwampala"
 *         image: "1.jpeg"
 *         role: "User"
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/users'
 *     responses:
 *       201:
 *          description: The new user data was successfully created
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/users'
 *       500:
 *          description: Internal Server Error
 */



/**
 * @swagger
 * /users:
 *    get:
 *      summary: Returns the list of users
 *      responses:
 *        200:
 *          description: The list of the users
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/users'
 */
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: The user was not found
 */

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update the user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */
/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update the user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 * 
 *     responses:
 *       200:
 *         description: The user was deleted successfully
 *       404:
 *         description: The user was not found
 */

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

import {getAll,addnew, getbyId, removeData, UpdateData} from "../controllers/crud";

//usersRouter.use(verifyToken);
usersRouter.get("/", getAll);
usersRouter.post("/",upload.single("image"),logger, addnew);
usersRouter.delete("/:id",removeData);
// studentsRouter.put("/:id",putData);
 usersRouter.get("/:id", isAdmin, getbyId);
 usersRouter.patch("/:id",UpdateData);

export default usersRouter;
              
//module.exports =studentsRouter; 