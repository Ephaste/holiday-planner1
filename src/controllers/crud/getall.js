//const students = require("../../utils/studentsDatabase.js");
//import { get } from "../../routes/students";
//import students from "../../utils/studentsDatabase";
import { User} from "../../models";

export const  getAll = async(req, res) =>{
    const newUser = await  User.find({});
     res.status(200).json(newUser);
}
//Getting all tours
import {tour} from "../../models";

export const  getAllt = async(req, res) =>{
    const newtour = await  tour.find({});
     res.status(200).json(newtour);
}
//Getting all bookings
import {booking} from "../../models";

export const  getAllb = async(req, res) =>{
    const newBooking = await  booking.find({});
     res.status(200).json(newBooking);
}
