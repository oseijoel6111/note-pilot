import { Router } from 'express'
import {signup, login} from '../controllers/index.js'

// user router
const userRouter = Router()

userRouter.post('/signup', signup)
userRouter.post('/login', login)


export { userRouter }