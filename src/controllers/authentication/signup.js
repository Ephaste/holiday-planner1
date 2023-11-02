import { generateToken,hashPassword } from "../../utils";
import { User } from "../../models/userModel";
import { sendEmail } from "./appController";
import { htmlMessage } from "../../utils/message";
export const signup = async(req, res) =>{
    

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