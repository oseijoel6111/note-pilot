import dotEnv from 'dotenv'
dotEnv.config()


export const ENV = {
    PORT: parseInt(process.env.PORT, 10)
}