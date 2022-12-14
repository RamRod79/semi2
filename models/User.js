const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


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
    // {
    //     sequelize
    // }

{
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }

);


module.exports = User;
