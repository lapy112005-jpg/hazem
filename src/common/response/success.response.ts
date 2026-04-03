import { Response } from "express";

export const sucessResponse = <T = any>({res , message="sucess" , data,  status=200}:{res:Response,message?:string , data?:T , status?:number})=>{
    return res.status(status).json({message , data })
}