import { User} from "../../models";

//Delete a user

export const removeData = async (req, res) => {
    try {
      let user = await User.findByIdAndRemove(req.params.id);
      if (!user) {
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
    return res.json({ message: "booking deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
//Delete a tour

import {tour} from "../../models";
export const removeDatat = async (req, res) => {
  try {
    let Tour = await tour.findByIdAndRemove(req.params.id);
    if (Tour) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "user not found" });
    }
    return res.json({ message: "booking deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
//Delete a tour a testimonial

import {testimonies} from "../../models";
export const removeDatats = async (req, res) => {
  try {
    let Testimonies = await testimonies.findByIdAndRemove(req.params.id);
    if (!Testimonies) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "user not found" });
    }
    return res.json({ message: "booking deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
//Delete a tour a contact

import {contact} from "../../models";
export const removeDatac = async (req, res) => {
  try {
    let Contact = await contact.findByIdAndRemove(req.params.id);
    if (!Contact) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "user not found" });
    }
    return res.json({ message: "booking deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
