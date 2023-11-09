import express  from "express";
import { cashin, cashout } from "../middleware/paypack";
require ("dotenv").config();
const payRouter = express.Router();


payRouter.get("/", cashin);
payRouter.post("/", cashout);
export default payRouter;