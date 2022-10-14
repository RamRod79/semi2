const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
        },
        first_name: {

        },
        last_name: {

        }, 
        email: {

        }, 
        password: {

        },
        dea_id: {

        }
    }
)
