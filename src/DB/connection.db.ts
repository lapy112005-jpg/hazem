import { connect, syncIndexes } from "mongoose";
import { DB_URI } from "../config/config";

export const connectDB = async()=>{
    try {
        await connect(DB_URI as string)
        console.log("db connected successfully");
        await syncIndexes()
        
    } catch (error) {
        console.log("fail to connect to db " , error);
    
    }
}