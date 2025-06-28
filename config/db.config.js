import { Sequelize } from 'sequelize';
import { ENV } from './env.js';

export const dbConnection = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
})