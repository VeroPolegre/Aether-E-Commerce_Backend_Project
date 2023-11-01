"use strict";
const { v4: uuidv4 } = require("uuid");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // User.beforeCreate((user, _) => {
  //   return (user.id = uuidv4());
  // });

  return User;
};
