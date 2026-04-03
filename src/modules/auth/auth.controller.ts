import type {NextFunction, Request, Response , Router as routerType} from "express"
import {  Router } from "express"
import authService from "./auth.service"
import { sucessResponse } from "../../common/response/success.response"
import { confirmEmail_schema, login_schema, signup_schema } from "./auth.validition"
import { validition } from "../../middleware/validition.middleware"
import { Iuser } from "../../common/interfaces/user.interface"


const router:routerType = Router()
router.post("/signup" ,validition(signup_schema), async(req:Request,res:Response,next:NextFunction)=>{
        const result = await authService.signup(req.body)
        sucessResponse<Iuser>({res , data:result})
})


router.post("/login" ,validition(login_schema), async(req:Request,res:Response,next:NextFunction)=>{

    const result = await authService.login(req.body)
    sucessResponse({res , data:result , status:201})
})                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
router.post("/confirm-email" ,validition(confirmEmail_schema), async(req:Request,res:Response,next:NextFunction)=>{
    const result = await authService.confirmEmail(req.body)
    sucessResponse({res , data:result , status:201})
})                  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

export default router