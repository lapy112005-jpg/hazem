// import {  badRequestException } from "../../common/exceptions";
import { badRequestException } from "../../common/exceptions";
import { Iuser } from "../../common/interfaces/user.interface";
import { userModel } from "../../DB/model";
import { redisClient } from "../../DB/redis.connection";
import { UserRepository } from "../../DB/repository/user.repository";
import { loginDTO, signupDTO } from "./auth.dto";
import {  compare} from "bcrypt"
// import { Isignup } from "./auth.interface";

 class AuthServices {
    private readonly userRepository:UserRepository
    constructor() { 
        this.userRepository = new UserRepository(userModel)
    }
     signup = async(data:signupDTO):Promise<Iuser>=>{
        const {email , password  , username , confirmPassword }  = data
        const[user] = await this.userRepository.create({data:[{email  , password , username  , confirmPassword }]})||[]
        if (!user) {
            throw new badRequestException("fail to add user in database")
        }
        return user.toJSON()
    }
    login = async(data:loginDTO)=>{
        const {email , password} = data
        const user = await this.userRepository.findOne({filter:{email , password}})
        return user
    }
    confirmEmail = async({email , otp}:{email:string , otp:number})=>{
        const user = await this.userRepository.findOne({filter:{email}})
        if (!user) {
            throw new badRequestException("wrong email")
        }
        const hashed_OTP_in_radis = await redisClient.get(`signup_otp:${email}`);
        if (!hashed_OTP_in_radis) {
            throw new Error("otp expired");
        }
        if (!compare(otp.toString()  , hashed_OTP_in_radis)) {
            throw new Error("invalid otp .. ");
        }
        user.confirmEmail = new Date();
        await user.save()
        return "your email confirmed";
    }
 }
 export default new AuthServices()