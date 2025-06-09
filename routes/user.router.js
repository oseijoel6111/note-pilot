import { Router } from "express";

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.send('You are Signed Up')
})

userRouter.post('/login', (req, res) => {
    res.send('You are loged in')
})

export {userRouter};