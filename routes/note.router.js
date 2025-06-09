import { Router } from "express";

const noteRouter = Router();

noteRouter.post('/create', (req, res) => {
    res.send('Note created successfully')
})

export {noteRouter};