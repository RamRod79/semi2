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
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                Model: 'User', 
                key: 'id'
            }     
        },
        drug_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                Model: 'Drug', 
                key: 'id'
            }       
         },
        product_name: {
            type: DataTypes.VARCHAR(50),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }
)