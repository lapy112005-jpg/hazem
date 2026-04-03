import { NextFunction, Request, Response } from "express"
import { badRequestException } from "../common/exceptions"
import { ZodError, ZodType } from "zod"
type keyRequestType =  keyof Request
type schemaType =  Partial<Record<keyRequestType , ZodType>>
export const validition = (schema:schemaType)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        const validitionErrors:Array<{
            key:keyRequestType,
            issues:Array<{
                message:string,
                path:Array<string|number|undefined|symbol>
            }>
        }> = []
        
        for (const key of Object.keys(schema) as keyRequestType[]) {
            if (!schema[key]) continue ;
            const validitionResult = schema[key].safeParse(req[key as keyRequestType])
            if (!validitionResult.success) {
                const error = validitionResult.error as ZodError
                validitionErrors.push({key , issues:error.issues.map(issue =>{
                    return{message:issue.message , path:issue.path}
                })})
            }
        }
        if (validitionErrors.length) {
            throw new badRequestException("validition error" , validitionErrors)
        }
        next()
    }
}