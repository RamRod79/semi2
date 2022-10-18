const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        first_name: {
            type: DataTypes.VARCHAR(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.VARCHAR(30),
            allowNull: false
        }, 
        email: {
            type: DataTypes.email,
            allowNull: false,
            unique: false
        }, 
        password: {
            type: DataTypes.password,
            allowNull: false,
            unique: false
        },
        DEA_num: {
            type: DataTypes.VARCHAR(20),
            unique: true
        }
    }
)
