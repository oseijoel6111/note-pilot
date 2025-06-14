import { Router } from "express";
import {signup, login} from '../controllers/index.js'
import { signupSchema } from "../validators/index.js";
import { validateSchema } from "../utils/index.js";

const userRouter = Router();


userRouter.post('/signup',validateSchema(signupSchema), signup)
userRouter.post('/login', login)

export {userRouter};