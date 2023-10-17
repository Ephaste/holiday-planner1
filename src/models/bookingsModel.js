import mongoose from "mongoose";
const bookingSchema = mongoose.Schema({
    tourId: { type: String, require: true, unique: true ,unique: true},
    userId: String,
    isPayed:{type: String, require: true},
    paymentMethod: String,
    location: String,
    
   
});
export const booking =mongoose.model("booking", bookingSchema);