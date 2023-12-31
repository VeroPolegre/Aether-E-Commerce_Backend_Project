"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.Library);
      Game.hasMany(models.Review);
      Game.belongsToMany(models.Category, {
        through: models.GamesCategories,
      });
      Game.belongsToMany(models.Order, {
        through: models.OrdersGames,
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
      image_path: DataTypes.STRING,
      description: DataTypes.STRING,
      release_date: DataTypes.DATE,
      price: DataTypes.DECIMAL,
      genre: DataTypes.STRING,
      platform: DataTypes.STRING,
      rating: DataTypes.INTEGER,

      LibraryId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
