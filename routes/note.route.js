import { Router } from "express";

const noteRouter = Router()

noteRouter.post('/', (req, res) => {
    res.send('POST Notes created')
})

noteRouter.get('/', (req, res) => {
    res.send('GET Notes created')
})


export { noteRouter }