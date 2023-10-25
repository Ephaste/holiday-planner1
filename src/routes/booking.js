
import express  from "express";
import { isAdmin } from "../middleware";
const bookingsRouter = express.Router();

import {getAllb,addnewb, getbyIdb,removeDatab} from "../controllers/crud";

/**
 * @swagger
 * components:
 *   schemas:
 *     Contacts:
 *       type: object
 *       required:
 *         - tourId
 *         - userId
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
 *         isPayed:
 *           type: string
 *           description: Whether booking payed or not
 *         paymentMethod:
 *           type: string
 *           description: the way payment is done
 *         location:
 *           type: string
 *           description: The location of the user
 *       example:
 *         id: 2d3f
 *         tourId: "4546"
 *         userId: "76hhu88"
 *         isPayed: "Yes"
 *         paymentMethod: "Momo"
 *         location: "Kigali, rwampala"
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
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/bookings'
 *     responses:
 *       201:
 *          description: The new booking data was successfully created
 *          content:
 *             multipart/form-data:
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
// studentsRouter.put("/:id",UpdateData);

export default bookingsRouter;
              
//module.exports =studentsRouter; 