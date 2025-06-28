import { logger } from "../utils/index.js"
import { successResponse } from "../helpers/index.js"
import {StatusCodes} from 'http-status-codes'
import { User } from "../models/users.model.js"

export const signup = (req, res)=>{  

    // determine if user already exist
    // User
    
    // save the user in db(hashing password)

    // send verification email code to the user


    // send a successful response 

     successResponse(res, StatusCodes.CREATED, "It's working", req.body)
}


export const login = (req, res)=>{
    res.send('User login successfully')
}