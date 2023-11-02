"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.Library);
      Game.belongsToMany(models.Category, {
        through: models.GamesCategories,
      });
    }
  }
  Game.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      title: DataTypes.STRING,
      description: DataTypes.STRING,
      release_date: DataTypes.DATE,
      price: DataTypes.DECIMAL,
      genre: DataTypes.STRING,
      platform: DataTypes.STRING,
      rating: DataTypes.INTEGER,

      PublisherId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
