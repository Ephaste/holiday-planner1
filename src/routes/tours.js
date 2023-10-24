
import express  from "express";
import { isAdmin } from "../middleware";
const toursRouter = express.Router();

import {getAllt,addnewt, getbyIdt, removeDatat} from "../controllers/crud";

// /**
//  * @swagger
//  * components:
//  *   securitySchemes:
//  *     BearerAuth:
//  *       type: http
//  *       scheme: bearer
//  *       bearerFormat: JWT
//  *   schemas:
//  *     tours:
//  *       type: object
//  *       required:
//  *         - destination
//  *         - backDropImage
//  *         - title
//  *         - description
//  *         - duration
//  *         - groupSize
//  *         - price
//  *         - discount
//  *         - tourType
//  *         - departure
//  *         - seats
//  *         - fromMonth
//  *         - toMonth
//  *         - departureTime
//  *         - returntime
//  *         - gallery
//  *         - priceIncluded
//  *         - priceNotIncluded
//  *       properties:
//  *         destination:
//  *           type: string
//  *           description: The destination of the tour
//  *         backDropImage:
//  *           type: string
//  *           format: binary
//  *           description: The backdrop image for the tour
//  *         title:
//  *           type: string
//  *           description: The title of the tour
//  *         description:
//  *           type: string
//  *           description: A brief description of the tour
//  *         duration:
//  *           type: string
//  *           description: The duration of the tour
//  *         groupSize:
//  *           type: string
//  *           description: The group size for the tour
//  *         price:
//  *           type: string
//  *           description: The price of the tour
//  *         discount:
//  *           type: string
//  *           description: Any discount available for the tour
//  *         tourType:
//  *           type: string
//  *           description: The type of tour (e.g., wildlife, cultural)
//  *         departure:
//  *           type: string
//  *           description: The departure location for the tour
//  *         seats:
//  *           type: string
//  *           description: The number of available seats
//  *         fromMonth:
//  *           type: string
//  *           description: The starting month of the tour
//  *         toMonth:
//  *           type: string
//  *           description: The ending month of the tour
//  *         departureTime:
//  *           type: string
//  *           description: The departure time for the tour
//  *         returntime:
//  *           type: string
//  *           description: The return time for the tour
//  *         gallery:
//  *           type: array
//  *           items:
//  *             type: string
//  *             format: binary
//  *           description: A gallery of images related to the tour
//  *         priceIncluded:
//  *           type: string
//  *           description: What's included in the tour price
//  *         priceNotIncluded:
//  *           type: string
//  *           description: What's not included in the tour price
//  *       example:
//  *         destination: "Rwanda, East Africa"
//  *         backDropImage: "Beautiful_Rwanda.jpeg"
//  *         title: "Rwanda's Natural Wonders Expedition"
//  *         description: "Explore the breathtaking landscapes and wildlife of Rwanda, known as the 'Land of a Thousand Hills.'"
//  *         duration: "10 days, 9 nights"
//  *         groupSize: "Small group tour, limited to 12 travelers for an intimate experience"
//  *         price: "$3,499 per person"
//  *         discount: "15% off for bookings made before the end of the year"
//  *         tourType: "Wildlife and Nature"
//  *         departure: "Kigali International Airport, Rwanda"
//  *         seats: "6 seats remaining"
//  *         fromMonth: "June"
//  *         toMonth: "September"
//  *         departureTime: "9:00 AM (local time)"
//  *         returntime: "5:00 PM (local time)"
//  *         gallery: "images.jpg, 2022-12-26.jpg,..."
//  *         priceIncluded: "Accommodation in eco-friendly lodges, All meals during the tour, Gorilla trekking permits, Game drives and safaris, guides and naturalists, All in-country transportation."
//  *         priceNotIncluded: "International airfare to and from Rwanda, Visa fees (if applicable), Personal expenses, Travel insurance, Gratuities for guides and staff."
//  */

// /**
//  * @swagger
//  * tags:
//  *   name: Tours
//  *   description: The tours managing API
//  */

// /**
//  * @swagger
//  * /tours:
//  *   post:
//  *     summary: Create a new type of tour data
//  *     tags: [Tours]
//  *     security:
//  *       - BearerAuth: []
//  *     requestBody:
//  *          required: true
//  *          content:
//  *            multipart/form-data:
//  *               schema:
//  *                   $ref: '#/components/schemas/tours'
//  *     responses:
//  *       201:
//  *          description: The new tour data was successfully created
//  *          content:
//  *             multipart/form-data:
//  *               schema:
//  *                   $ref: '#/components/schemas/tours'
//  *       500:
//  *          description: Internal Server Error
//  */

//usersRouter.use(verifyToken);
toursRouter.get("/", getAllt);
toursRouter.post("/", addnewt);
toursRouter.delete("/:id",removeDatat);
// studentsRouter.put("/:id",putData);
 toursRouter.get("/:id",isAdmin, getbyIdt);
// studentsRouter.put("/:id",UpdateData);

export default toursRouter;
              
//module.exports =studentsRouter; 