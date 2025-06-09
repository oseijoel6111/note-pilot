import { Router } from "express";

const reminderRouter = Router();

reminderRouter.post('/create', (req, res) => {
    res.send('Endpoint for Reminder is hit')
})

// reminderRouter.post('/login', (req, res) => {
//     res.send('You are loged in')
// })

export {reminderRouter};