//Update a user by id
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
//Update a tour by id
import { tour } from "../../models";

export const UpdateDatat = async (req, res) => {
    const tourId = req.params.id; // Assuming the ID is passed as a URL parameter
    const updateData = req.body; // Assuming you send the updated data in the request body

    try {
        const updatedTour = await tour.findByIdAndUpdate(tourId, updateData, { new: true });

        if (!updatedTour) {
            return res.status(404).json({ error: "Tour is not found" });
        }

        res.status(200).json(updatedTour);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

//Update a booking by id

import {booking} from "../../models";

export const UpdateDatab = async (req, res) => {
  const bookingId = req.params.id; // Assuming the ID is passed as a URL parameter
  const updateDatab = req.body; // Data to be updated in the user document

  try {
    const Booking= await booking.findById(bookingId);

    if (!Booking) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's information based on the data provided in th e request body
    Booking.tourId = updateDatab.email || Booking.tourId;
    Booking.isPayed = updateDatab.fullNames || Booking.isPayed;
    Booking.paymentMethod = updateDatab.paymentMethod || Booking.paymentMethod;
    Booking.location = updateDatab.location || Booking.location
    // Add other fields that you want to update in a similar way

    // Save the updated user document
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
//Update a testimony by id

// update contact by id
