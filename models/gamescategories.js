"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GamesCategories extends Model {
    static associate(models) {
      // define association here
    }
  }
  GamesCategories.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      GameId: DataTypes.UUID,
      CategoryId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "GamesCategories",
    }
  );
  return GamesCategories;
};
