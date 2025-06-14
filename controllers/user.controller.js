import { logger } from "../utils/index.js"

export const signup = (req, res)=>{  

    logger.warn("Testing")
     res.send(req.body)
}


export const login = (req, res)=>{
    res.send('User login successfully')
}