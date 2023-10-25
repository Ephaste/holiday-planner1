
import express  from "express";
import { isAdmin } from "../middleware";
const testimoniesRouter = express.Router();

import {getAllts,addnewts, getbyIdts, removeDatats} from "../controllers/crud";


/**
 * @swagger
 * components:
 *   schemas:
 *     Testimonies:
 *       type: object
 *       required:
 *         - rating
 *         - body
 *         - UserId
 *       properties:
 *         id:
 *           type: string
 *           description: auto generated id
 *         rating:
 *           type: string
 *           description: how much in percentage
 *         body:
 *           type: string
 *           description: The message
 *         UserId:
 *           type: string
 *           description: id of the user who given testimony
 *       example:
 *         id: 2d3f
 *         rating: "70%"
 *         body: "I surely found that the world is large and the life is short"
 *         UserId: "454f"
 */
/**
 * @swagger
 * tags:
 *   name: Testimonies
 *   description: The testimonies managing API
 */
/**
 * @swagger
 * /testimonies:
 *   post:
 *     summary: Create a new testimony
 *     tags: [Testiomonies]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/testimonies'
 *     responses:
 *       201:
 *          description: The newtestimony data was successfully created
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/testimonies'
 *       500:
 *          description: Internal Server Error
 */
/**
 * @swagger
 * /testimonies:
 *    get:
 *      summary: Returns the list of testimonies
 *      responses:
 *        200:
 *          description: The list of the testimonies
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items: 
 *                  $ref: '#/components/schemas/testimonies'
 */
/**
 * @swagger
 * /testimonies/{id}:
 *   get:
 *     summary: Get the contact by ID
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The testimony ID
 *     responses:
 *       200:
 *         description: The testimony description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/testimonies'
 *       404:
 *         description: The testimoy was not found
 */
/**
 * @swagger
 * /testimonies/{id}:
 *   put:
 *     summary: Update the testimony by ID
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Testimonies'
 *     responses:
 *       200:
 *         description: The contact was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/testimonies'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error occurred
 */
/**
 * @swagger
 * /testimonies/{id}:
 *   delete:
 *     summary: Remove the testimony by ID
 *     tags:
 *       - Testimonies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The contact ID
 * 
 *     responses:
 *       200:
 *         description: The testimony was deleted successfully
 *       404:
 *         description: The testimony was not found
 */
//usersRouter.use(verifyToken);
testimoniesRouter.get("/", getAllts);
testimoniesRouter.post("/", addnewts);
 testimoniesRouter.delete("/:id",removeDatats);
// studentsRouter.put("/:id",putData);
 testimoniesRouter.get("/:id",isAdmin, getbyIdts);
// studentsRouter.put("/:id",UpdateData);

export default testimoniesRouter;
              
//module.exports =studentsRouter; 