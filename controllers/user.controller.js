import { logger } from "../utils/index.js"
import { successResponse } from "../helpers/index.js"
import {StatusCodes} from 'http-status-codes'

export const signup = (req, res)=>{  

    // logger.warn("Testing")
    //  res.send(req.body)
    //  res.status().json({})

     successResponse(res, StatusCodes.CREATED, "It's working", req.body)
}


export const login = (req, res)=>{
    res.send('User login successfully')
}