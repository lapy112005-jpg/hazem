import { z} from "zod"



export const login_schema = {
    body: z.strictObject({
        email: z.email(),
        password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ , {message:"password must be at least 8 characters and contain at least 1 letter and 1 digit"}),
    })
}
export const signup_schema = {
    body: login_schema.body.extend({
        username: z.string().min(3).max(20),
        confirmPassword:z.string()
    }).refine((data)=>{
        return data.password === data.confirmPassword
    },{
        error:"password mismatch confirm paswword"
    })
}
export const confirmEmail_schema = {
    body: z.strictObject({
        email: z.email(),
        otp:z.number().min(6).max(6)
    })
}
// .catchall(z.string())             //لو فيه زياده يقبلهاا بشرط انها تكون سترينج
