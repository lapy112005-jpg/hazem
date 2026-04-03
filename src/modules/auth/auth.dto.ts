import {z} from "zod";
import { login_schema, signup_schema } from "./auth.validition";

// export interface loginDTO{
//     email:string;
//     password:string;
// }
// export interface signupDTO extends loginDTO{
//     username:string;
//     confirmPassword:string
// }
export type signupDTO = z.infer<typeof signup_schema.body>
export type loginDTO = z.infer<typeof login_schema.body>

