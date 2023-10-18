import mongoose from "mongoose";
const tourSchema = mongoose.Schema({
    destinatiom: String,
    backdropImage: String,
    title: String,
    description: String,
    duration: String,
    groupSize: String,
    price: String,
    discount: String,
    tourType: String,
    departure: String,
    seats: String,
    fromMonth: String,
    toMonth: String,
    departureTime: String,
    returnTime: String,
    gallery: String,
    priceIncluded: String,
    priceNotIncluded: String,

});
export const tour =mongoose.model("tour", tourSchema);