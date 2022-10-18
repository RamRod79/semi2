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
                Model: 'Drug',
                key: 'id'
            }
        },
        interactions: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        side_effects: {
            type: DataTypes.VARCHAR(100),
            allowNull: false
        },
        warnings: { 
            type: DataTypes.VARCHAR(50),
            allowNull: false
        },
        ndc: {
            type: DataTypes.VARCHAR(50),
            allowNull: false 
        }
    }
)


