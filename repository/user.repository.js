import { User } from "../models"


export const isUserExist = async(username, email)=>{
    try{
        await User.findOne({where: {username, email}})
    }catch(error){

    }
}