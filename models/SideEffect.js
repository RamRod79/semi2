const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SideEffect extends Model {}

SideEffect.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        },
        drug_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false, 
            references: {
                model: 'Drugs',
                key: 'id'
            }
        },
        interactions: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        side_effects: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        warnings: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        ndc: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    },
    {
        sequelize
    }
)


module.exports = SideEffect;


