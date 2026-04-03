import mongoose, { model } from "mongoose";
import { genderEnum, roleEnum } from "../../common/enums/user.enums";
import { Iuser } from "../../common/interfaces/user.interface";


const UserSchema =new mongoose.Schema<Iuser>({
    firstName:{type:String , required:true},
    lastName:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    bio:{type:String , maxLength:200 , required:false},
    phone:{type:String , required:false},
    profileImage:{type:String , required:false},
    coverImages:{type:[String] , required:true},
    DOB:{type:Date , required:false},
    confirmedAt:{type:Date , required:false},
    gender:{type:Number , enum:genderEnum , default:genderEnum.male},
    role:{type:Number , enum:roleEnum , default:roleEnum.user},
    confirmEmail:{type:Date}
},{
    timestamps:true,
    strict:true,
    strictQuery:true,
    collection:"social_app",
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

UserSchema.virtual("username").get(function(this){
    return `${this.firstName} ${this.lastName}`
}).set(function(this , value){
    const [firstName , lastName] = value.split(" ")
    this.firstName = firstName as string
    this.lastName = lastName as string
})

export const userModel =mongoose.models.User|| model<Iuser>("User" , UserSchema)   //safty check