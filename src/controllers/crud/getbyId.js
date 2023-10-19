
import { User} from "../../models";

export const getbyId = async (req, res) => {
    const userId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //getting a tour by id:

  
import { tour} from "../../models";

export const getbyIdt = async (req, res) => {
    const userId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const Tour = await tour.findById(userId);
  
      if (!Tour) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(Tour);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

   //getting a booking by id:

  
import { booking} from "../../models";

export const getbyIdb = async (req, res) => {
    const bookingId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const Booking = await booking.findById(bookingId);
  
      if (!Booking) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(Booking);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };

  //getting a contact by id:

  
import {contact} from "../../models";

export const getbyIdc = async (req, res) => {
    const contactId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const Contact = await booking.findById(contactId);
  
      if (!Contact) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(Contact);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };


  //getting a testimonies by id:

  
import {testimonies} from "../../models";

export const getbyIdts = async (req, res) => {
    const testimoniesId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const Testimonies = await testimonies.findById(testimoniesId);
  
      if (Testimonies) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(Testimonies);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
