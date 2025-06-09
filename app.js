import express from 'express'
// 
import {userRouter, noteRouter, reminderRouter} from './routes/index.js'
// create express app
const app = express()

const API_VERSION = '/api/v1'

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.use(`${API_VERSION}/users`, userRouter)
app.use(`${API_VERSION}/notes`, noteRouter)
app.use(`${API_VERSION}/reminder`, reminderRouter)

// app.post(`${API_VERSION}/users/signup`, (req, res) =>{
//     res.send('Sign up done')
// })

// app.post(`${API_VERSION}/users/login`, (req, res) =>{
//     res.send('Login is done successfuly')
// })

// app.use('/users')
// app.use('/notes')

export default app;