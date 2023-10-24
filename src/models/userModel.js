import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true ,unique: true},
    fullNames: String,
    password:{type: String, require: true},
    phoneNumber: String,
    location: String,
    image: String,
    role: {type: String, default: "user"},
   
});
export const User =mongoose.model("User", userSchema);