import mongoose from "mongoose";
const bookingSchema = mongoose.Schema({
    tourId: { type: String, require: true, unique: true ,unique: true},
    userId: String,
    whoBooked: String,
    tourBooked: String,
    date: String,
    Status: {type: String, default: "pending"},
    numberOfTicket:String,
    isPayed:{type: String, require: true},
    paymentMethod: String,
    location: String,
    
   
});
export const booking =mongoose.model("booking", bookingSchema);