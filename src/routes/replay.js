
import express  from "express";
import { isAdmin, verifyToken } from "../middleware";
import { replayFunction } from "../controllers/crud";
const contactReplayRouter = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Replay:
 *       type: object
 *       required:
 *         - contactId
 *         - adminEmail
 *         - subject
 *         - replay
 *       properties:
 *         id:
 *           type: string
 *           description: auto generated id
 *         contactId:
 *           type: string
 *           description: id of the contact tobe replied
 *         adminEmail:
 *           type: string
 *           description: The email sending
 *         subject:
 *           type: string
 *           description: Message subject
 *         replay:
 *           type: string
 *           description: message written by the admin to replay
 *       example:
 *         contactId: 2d3f
 *         adminEmail: "admin@gmail.com"
 *         subject: "I surely found that the world is large and the life is short"
 *         replay: "hi aaaa so we are contacting you"
 */
/**
 * @swagger
 * tags:
 *   name: Replay
 *   description: The Replay managing API
 */
/**
 * @swagger
 * /replay:
 *   post:
 *     summary: Replaying the contact
 *     tags: [Testiomonies]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *          required: true
 *          content:
 *            multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/replay'
 *     responses:
 *       201:
 *          description: The newtestimony data was successfully created
 *          content:
 *             multipart/form-data:
 *               schema:
 *                   $ref: '#/components/schemas/replay'
 *       500:
 *          description: Internal Server Error
 */
//usersRouter.use(verifyToken);
contactReplayRouter.use(verifyToken);

contactReplayRouter.post("/:id", replayFunction);


export default contactReplayRouter;
              
