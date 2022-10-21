const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserQuery extends Model {}

UserQuery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user', 
                key: 'id'
            }     
        },
        drug_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'Drugs', 
                key: 'id'
            }       
         },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize
    }
)


module.exports = UserQuery;