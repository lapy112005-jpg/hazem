import { createClient } from "redis"
import { REDIS_URL } from "../config/config";

export const redisClient = createClient({
  url : REDIS_URL as string
});
console.log(REDIS_URL);


export const redisConnection = async()=>{
    try {
        await redisClient.connect()
        console.log("redis connected succeffuly");
        
    } catch (error) {
        console.log("fail to connect with redis" , error);
        console.log(REDIS_URL);
        
    }
}