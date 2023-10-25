import { hashPassword, comparePassword } from "../../utils";
import { user } from "../../models";

export const changePassword = async (req, res) => {
  try { 
    const { currentPassword, newPassword } = req.body;
    const { userId } = req;

    const User = await user.findById(userId);

    // This stores a boolean that indicates if the current password is correct or not
    let isPassword = await comparePassword(currentPassword, user.password);

    if (!isPassword) {
      return res.status(401).json({
        message: "The current password is wrong",
      });
    }

    let hashedPassword = await hashPassword(newPassword);

    user.password = hashedPassword;

    user.save();

    res.status(200).json({
      message: "Password changed successfully",
    });

    
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
  
};