import {  Model } from "mongoose";
import { Iuser } from "../../common/interfaces/user.interface";
import { BaseRepository } from "./base.repository";


export class UserRepository extends BaseRepository<Iuser>{
    constructor(protected override model:Model<Iuser>){
        super(model)
    }

}