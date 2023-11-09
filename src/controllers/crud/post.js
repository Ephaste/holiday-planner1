
import {User} from "../../models"
import path from "path";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
  cloudinary.v2;
  cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
  });
export const  addnew = async(req, res) =>{
    let user = req.body
    //let photo =req.file;
    const image = await cloudinary.uploader.upload(req.file.path);
    console.log(image);
    
      let newUser =   await User.create({
        email: user.email,
      fullNames: user.fullNames,
      password: user.password,
      phoneNumber:user.phoneNumber,
      image:req.file.path,
      location: user.location



      });
        

        console.log(newUser);
        console.log(req.body);
        console.log(req.file);
        res.status(201).json(newUser);

};
 ///addTour 
import {tour } from "../../models";

export const addnewt = async (req, res, next) => {
  const tourImagesArray = [];
  const backdropImage = await cloudinary.uploader.upload(
    req.files["backdropImage"][0].path
  );

  if (req.files["gallery"]) {
    console.log(req.files["gallery"]);
    for (let index = 0; index < req.files["gallery"].length; index++) {
      tourImagesArray.push(
        await cloudinary.uploader.upload(req.files["gallery"][index].path)
      );
    }
  }


  const newTour = await tour.create({
    ...req.body,
    backdropImage: backdropImage.secure_url,
    gallery: req.files["gallery"]
      ? tourImagesArray.map((item) => item.secure_url)
      : "",
  });
console.log(req.file);
console.log(newTour);
  return res.status(201).json({
    status: "Tour created successfully",
    data: { newTour },
  });
};

//  Creating a new booking:
import {booking} from "../../models";

export const  addnewb = async(req, res) =>{
  try{
    let Booking = req.body;
    
    let newBooking =   await booking.create(Booking);
      
      console.log(newBooking);
      res.status(201).json(newBooking);
  }catch(error){
    res.status(500).json({ error: "Internal server error" });
  }
};
   //Creating a new contact


import {contact} from "../../models";
import {htmlMessageContact} from "../../utils/messagecontact";
import { sendEmail } from "../authentication/appController";
   

export const  addnewc = async(req, res) =>{
  try{
    let Contact = req.body;
    
    let newContact =   await contact.create(Contact);
      
      console.log(newContact);
      res.status(201).json(newContact);
      await sendEmail(Contact.email,"welcome message","thanks",htmlMessageContact);
  }catch(error){
    res.status(500).json({ error: "Internal server error" });
  }
   

};
//Creating a new testimony


import {testimonies} from "../../models";

export const  addnewts = async(req, res) =>{
  try{
    let Testimonies = req.body;
    
    let newTestimonies =   await testimonies.create(Testimonies);
      
      console.log(newTestimonies);
      res.status(201).json(newTestimonies);
  }catch(error){
    res.status(500).json({ error: "Internal server error" });
  }

};
//Replay
//import { sendEmail } from "../authentication/appController";
import { htmlMessage } from "../../utils/message";
import { replay } from "../../models/replayModel"
export const replayFunction = async (req, res, next)=>{
  var id = req.params.id;
  const contactt = await  contact.findById(id);
  if(!contactt){
    return res.status(404).json({
      message : `We did n't see the document with ${id}`
    });
  }
  req.body.contactId =id;
  req.body.adminEmail =req.userEmail;
  let tobeReplied = contactt.emails;
console.log(tobeReplied,"===============================================================")
  contact. replay=req.body;
  const dateReplied = new Date;
  await contactt.save();
  if(!req.body || req.body.replay ==" "){
    return res.status(404).json({
      message: `You can not send the empt message`
    });
  }
  let repl= await replay.create(req.body);
  //const renderedTemplate = ejs.render(replayMessage, {replay: contactt.replay});
  await sendEmail(tobeReplied, "holidayplanners to you", req.body.replay,htmlMessage);
  return res.status(202).json({message: `Replay made sucessfully`,
theanswer:repl});
next()
}
// catchAsync(replayFunction)

