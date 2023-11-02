import { Express } from 'express';
import  multer from "multer";
import path from "path"
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import tour from "../models";
dotenv.config();
  cloudinary.v2;
  cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
  });

  // Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


// Create a route to create a new tour
export const addnewt = async (req, res) => {
    const tourData = req.body;
  
    try {
      // Upload the backdrop image to Cloudinary
      const backdropImageUploadResult = await cloudinary.uploader.upload(req.files.backdropImage.path)
      
  console.log(backdropImageUploadResult);
      // Upload the gallery images to Cloudinary
      const galleryUploadResults = await Promise.all(
        req.files.gallery.map((image) => cloudinary.uploader.upload(image.path))
      );
  
      // Extract the URLs of the uploaded images
      const galleryUrls = galleryUploadResults.map((result) => result.secure_url);
  
      // Create a new tour with the Cloudinary URLs for the images
      const newTour = new tour({
        destination: tourData.destination,
        backdropImage: backdropImageUploadResult.secure_url,
        title: tourData.title,
        description: tourData.description,
        duration: tourData.duration,
        groupSize: tourData.groupSize,
        price: tourData.price,
        discount: tourData.discount,
        tourType: tourData.tourType,
        departure: tourData.departure,
        seats: tourData.seats,
        fromMonth: tourData.fromMonth,
        toMonth: tourData.toMonth,
        departureTime: tourData.departureTime,
        returnTime: tourData.returntime, // Fixed the typo in your schema
        gallery: galleryUrls,
        priceIncluded: tourData.priceIncluded,
        priceNotIncluded: tourData.priceNotIncluded,
      });
  
      // Save the tour to the database
      await newTour.save();
  
      res.json({ message: 'Tour created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the tour' })
    }
  }
  
