import { User} from "../../models";

//Delete a user

export const removeData = async (req, res) => {
    try {
      let user = await User.findByIdAndRemove(req.params.id);
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
//Delete a booking

import {booking} from "../../models";
export const removeDatab = async (req, res) => {
  try {
    let Booking = await booking.findByIdAndRemove(req.params.id);
    if (Booking) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "user not found" });
    }
    return res.json({ message: "User deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

