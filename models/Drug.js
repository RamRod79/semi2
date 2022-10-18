const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drug extends Model {}

Drug.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        }, 
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        generic_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        efficacy_rate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        class_schedule: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ndc: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        chemical_image: {
            type: DataTypes.BLOB,
            allowNull: false 
        },
        side_effects_id: {
            type: DataTypes.INTEGER,
            // allowNull: false,
            references: {
                model: 'SideEffects',
                key: 'id'
            }
        },
        condition: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        alt_drugs: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize
    }
)


module.exports = Drug;
