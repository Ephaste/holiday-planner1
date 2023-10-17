import { Users} from "../../models";

//Delete api

export const removeData = async (req, res) => {
    try {
      let user = await users.findByIdAndRemove(req.params.id);
      if (user) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: "user not found" });
      }
      return res.json({ message: "User deleted successfully!" });
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  };

