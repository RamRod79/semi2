const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isEmail: true
            }
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        DEA_num: {
            type: DataTypes.STRING,
            unique: true
        }
    },
    {
        sequelize
    }
)


module.exports = User;
