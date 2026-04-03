import {config} from "dotenv"
import { resolve } from "node:path"

config({path: resolve(`./.env.${process.env.NODE_ENV}`)})

export const PORT = process.env.PORT
export const DB_URI = process.env.DB_URI
export const REDIS_URL = process.env.REDIS_URL