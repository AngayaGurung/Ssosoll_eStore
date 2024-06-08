"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      contact: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            msg: "Please Enter Valid Data On Contact",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid Email Format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
      },
      role: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
