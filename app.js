import express from 'express'

// create express app
const app = express()
// allows JSON
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const API_VERSION = '/api/v1'


export default app;