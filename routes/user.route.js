import { Router } from 'express'

// user router
const userRouter = Router()

userRouter.post('/signup', (req, res) => {
    res.send('User signup successfully')
})

userRouter.post('/login', (req, res) => {
    res.send('User login successfully')
})


export { userRouter }