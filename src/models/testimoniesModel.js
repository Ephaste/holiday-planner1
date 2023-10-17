import mongoose from "mongoose";
const testimoniesSchema = mongoose.Schema({
    rating: String,
    body: String,
    UserId : String
});
export const testimonies =mongoose.model("testimonies", testimoniesSchema);