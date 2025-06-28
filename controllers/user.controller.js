import { logger } from "../utils/index.js"
import { successResponse } from "../helpers/index.js"
import {StatusCodes} from 'http-status-codes'

export const signup = async(req, res)=>{  

    // determine if user already exist
    const user = await isUserExist('joel615', 'oseijoel6111@gmail.com')
    
    // save the user in db(hashing password)

    // send verification email code to the user


    // send a successful response 

     successResponse(res, StatusCodes.CREATED, "It's working", req.body)
}


export const login = (req, res)=>{
    res.send('User login successfully')
}