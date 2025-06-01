import express from 'express'
import {userRouter, noteRouter} from './routes/index.js'

// create express app
const app = express()
const API_VERSION = '/api/v1'

app.use(`${API_VERSION}/users`, userRouter)
app.use(`${API_VERSION}/notes`, noteRouter )



export default app;