
import express  from "express";
import { isAdmin } from "../middleware";
const bookingsRouter = express.Router();

import {getAllb,addnewb, getbyIdb,removeDatab, UpdateDatab} from "../controllers/crud";

/**
 * @swagger
 * components:
 *   schemas:
 *     Contacts:
 *       type: object
 *       required:
 *         - tourId
 *         - userId
 *         - whoBooked
 *         - tourBooked
 *         - date
 *         - Status
 *         - numberOfTicket
 *         - isPayed
 *         - paymentMethod
 *         - location
 *       properties:
 *         id:
 *           type: string
 *           description: auto generated id
 *         tourId:
 *           type: string
 *           description: id of the tour
 *         userId:
 *           type: string
 *           description: The id of the user
 *         whoBooked:
 *           type: string
 *           description: a person who booked
 *         tourBooked:
 *           type: string
 *           description: the tour booked
 *         date:
 *           type: string
 *           description: The date of booking
 *         Status:
 *           type: string
 *           description: The date of booking
 *         numberOfTicket:
 *           type: string
 *           description: The date of booking
 *         isPayed:
 *           type: string
 *           description: The date of booking
 *         paymentMethod:
 *           type: string
 *           description: The date of booking
 *         location:
 *           type: string
 *           description: The date of booking
 *       example:
 *         id: 2d3f
 *         tourId: "4546"
 *         userId: "76hhu88"
 *         whoBooked: "Yes"
 *         tourBooked: "Momo"
 *         date: "june 2002"
 *         Status: "Pending"
 *         numberOfTicket: "2"
 *         isPayed: "yes"
 *         paymentMethod: "momo"
 *         location: "Kiggali, Rwanda"
 */
/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: The booking managing API
 */
/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            application/json:
 *               schema:
 *                   $ref: '#/components/schemas/bookings'
 *     responses:
 *       201:
 *          description: The new booking data was successfully created
 *          content:
 *             application/json:
 *               schema:
 *                   $ref: '#/components/schemas/bookings'
 *       500:
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /bookings:
 *    get:
 *      summary: Returns the list of bookings
 *      responses:
 *        200:
 *          description: The list of the bookings
 *          content:
 *            application/json:
 *              schemas:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/bookings'
 */

/**
 * @swagger
 * /bookings/{id}:
 *   get:
 *     summary: Get the booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: The user description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/bookings'
 *       404:
 *         description: The user was not found
 */
/**
 * @swagger
 * /bookings/{id}:
 *   put:
 *     summary: Update the booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bookings'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */

/**
 * @swagger
 * /bookings/{id}:
 *   patch:
 *     summary: Update the booking by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bookings'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/bookings'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */
/**
 * @swagger
 * /bookings/{id}:
 *   delete:
 *     summary: Remove the boking  by ID
 *     tags:
 *       - Bookings
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The booking ID
 * 
 *     responses:
 *       200:
 *         description: The booking was deleted successfully
 *       404:
 *         description: The booking was not found
 */
//usersRouter.use(verifyToken);
bookingsRouter.get("/", getAllb);
bookingsRouter.post("/", addnewb);
bookingsRouter.delete("/:id",removeDatab);
// studentsRouter.put("/:id",putData);
 bookingsRouter.get("/:id",isAdmin, getbyIdb);
bookingsRouter.put("/:id",UpdateDatab);

export default bookingsRouter;
              
//module.exports =studentsRouter; 