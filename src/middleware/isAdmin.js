import {User} from "../models";
export const  isAdmin = async(req, res, next)=>{
try{
    const {userId} =req;
    const user = await User.findById(userId);
    console.log(User, "user");
    if(user?.role !="admin"){
        return res.status(403).json({
            message:"This action is only for admins",
        });
    }
    next();
}catch(error){
    res.status(500).json({
        message: "Internal server error",
    });
}
};
