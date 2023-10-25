import { User } from "../../models";

export const UpdateData = async (req, res) => {
  const userId = req.params.id; // Assuming the ID is passed as a URL parameter
  const updateData = req.body; // Data to be updated in the user document

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's information based on the data provided in the request body
    user.email = updateData.email || user.email;
    user.fullNames = updateData.fullNames || user.fullNames;
    user.phoneNumber = updateData.phoneNumber || user.phoneNumber;
    // Add other fields that you want to update in a similar way

    // Save the updated user document
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
