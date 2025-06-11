import { Router } from "express";

const reminderRouter = Router()

reminderRouter.post('/', (req, res) => {
    res.send('POST Reminder created')
})

reminderRouter.get('/', (req, res) => {
    res.send('GET Reminder created')
})


export { reminderRouter }