import express from "express"
import type {  NextFunction,  Request,  Response } from "express"
import { authRouter } from "./modules/index"
import cors from "cors"
import { globalErrorHandler } from "./middleware"
import { connectDB } from "./DB/connection.db"
import { PORT } from "./config/config"
import { redisConnection } from "./DB/redis.connection"

export const bootstrap = async()=>{
    const app:express.Express = express()
    await connectDB()
    await redisConnection()
    //global middlewares
    app.use(cors() , express.json())
    
    app.get("/" , (req:Request ,res:Response ,next:NextFunction)=>{
        res.json({message:"hhhhh"})
    })
    //routers
    app.use("/auth" , authRouter)
    //global error handler
    app.use(globalErrorHandler)

    
    app.listen(PORT , ()=>{
        console.log("server is running port ..... "  , PORT);
        
    } )
}
