import express  from "express";
import { cashin, cashout } from "../middleware/paypack";
require ("dotenv").config();
const payRouter = express.Router();


payRouter.get("/", cashin);
payRouter.get("/", cashout);
export default payRouter;