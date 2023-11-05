"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User);
      Review.belongsTo(models.Game);
    }
  }
  Review.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      rating: DataTypes.INTEGER,
      text: DataTypes.STRING,
      date: DataTypes.DATE,

      UserId: DataTypes.UUID,
      GameId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
