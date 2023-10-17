
import {User} from "../../models"
export const  addnew = async(req, res) =>{
    let user = req.body;
    
      let newUser =   await User.create(user);
        
        console.log(newUser);
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


