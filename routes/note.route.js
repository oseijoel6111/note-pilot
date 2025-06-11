import { Router } from "express";
import {createNote, retrieveNote} from '../controllers/index.js'

const noteRouter = Router()

noteRouter.post('/', createNote)
noteRouter.get('/', retrieveNote)


export { noteRouter }