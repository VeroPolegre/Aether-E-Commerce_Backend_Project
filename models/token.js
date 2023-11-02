"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      // define association here
    }
  }

  Token.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      token: DataTypes.STRING,
      UserId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Token",
    }
  );

  return Token;
};
