"use strict";
const uuid = require("uuid");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      // define association here
    }
  }
  Token.init(
    {
      token: DataTypes.STRING,
      userId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Token",
    }
  );
  Token.beforeCreate((token, _) => {
    return (token.id = uuid());
  });
  return Token;
};
