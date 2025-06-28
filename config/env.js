import dotEnv from 'dotenv'
dotEnv.config()


export const ENV = {
    PORT: parseInt(process.env.PORT, 10) ?? 3450,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT
}