import { genderEnum, roleEnum } from "../enums/user.enums"

export interface Iuser {
    firstName:string,
    lastName:string,
    username?:string,
    email:string,
    password:string,
    gender:genderEnum,
    role:roleEnum,
    phone?:string,
    bio?:string
    DOB?:Date,
    confirmedAt?:Date,
    coverImages?:string[],
    profileImage?:string[],
    confirmPassword:string,
    confirmEmail:Date,

    createdAt:Date,
    updatedAt:Date

}