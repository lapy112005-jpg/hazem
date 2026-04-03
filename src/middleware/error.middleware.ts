import { NextFunction, Request, Response } from "express";

interface IError extends Error{
        statusCode?:number
}
export const globalErrorHandler = (error:IError , req:Request,res:Response,next:NextFunction)=>{
    console.log(error);
    res.status((error.statusCode as unknown as number )|| 500).json({
        message:error.message || "internal server error",
        stack:error.stack,
        cause:error.cause,
        error:error.message
    })
    
}