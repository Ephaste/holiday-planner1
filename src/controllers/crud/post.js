
import {User} from "../../models"
import path from "path"
export const  addnew = async(req, res) =>{
    let user = req.body
    //let photo =req.file;
    
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
//  Creating a new tour:
import {tour} from "../../models"
export const  addnewt = async(req, res) =>{
    let Tour = req.body;
    
      let newTour =   await tour.create(Tour);
        
        console.log(newTour);
        res.status(201).json(newTour);

};


