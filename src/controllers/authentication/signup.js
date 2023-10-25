import { generateToken,hashPassword } from "../../utils";
import { User } from "../../models/userModel";
import { sendEmail } from "./appController";
import { htmlMessage } from "../../utils/message";
export const signup = async(req, res) =>{
    
/**
 * @swagger
 * components:
 *   schemas:
 *     signup:
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
 *   name: SIGNUP
 *   description: The sign up managing API
 */
/**
 * @swagger
 * /signup:
 *   post:
 *     summary: a user sign up
 *     tags: [Signup]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/signup'
 *     responses:
 *       201:
 *          description: The new user is sucessfully registered!
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/signup'
 *       500:
 *          description: Internal Server Error
 */
    try{
        let hashedPassword = await hashPassword(req.body.password);
        req.body.password =hashedPassword;
        let newUser = await User.create(req.body);
        console.log("newuser.email",newUser.email)
await sendEmail(newUser.email,"welcome message","thanks",htmlMessage)
        //console.log("new user:", newUser);
        // console.log("request body", req.body);
        // console.log("After hashing", req.body);
     
     let token =  generateToken({
        _id: newUser._id,
        email: newUser.email,
         });
         res.status(201).json({
            message: "User registered sucessfully",
            access_token:token,
            user:{
                email : newUser.email,
                location: newUser.location,
                fullNames: newUser.fullNames,
                 role: newUser.role,
            },
         });
     
 
     
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "internal server error! User is already registered",
        });
    }
    
};