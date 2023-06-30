import {config} from "dotenv"

config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'upc'
export const DB_HOST = process.env.DB_HOST || '44.216.73.218'
export const DB_DATABASE = process.env.DB_DATABASE || 'kitty_sweet'
export const DB_PORT = process.env.DB_PORT || 8005

/*
console.log(process.env.PORT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
*/