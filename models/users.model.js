import { DataTypes } from 'sequelize';
import { dbConnection } from '../config/index.js';

export const User = dbConnection.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        verify_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    { timestamps: true, tableName: 'users' }
)