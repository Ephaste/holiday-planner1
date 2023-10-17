
import { User} from "../../models";

export const getbyId = async (req, res) => {
    const userId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //getting a tour by id:

  
  import { tour} from "../../models";

export const getbyIdt = async (req, res) => {
    const userId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const Tour = await tour.findById(userId);
  
      if (!Tour) {
        return res.status(404).json({ error: "User is not found" });
      }
  
      res.status(200).json(Tour);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
