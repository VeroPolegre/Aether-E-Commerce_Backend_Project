"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate(models) {
      Library.BelongsTo(models.User);
      Library.HasMany(models.Game);
    }
  }
  Library.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      UserId: DataTypes.UUID,
      GameId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Library",
    }
  );
  return Library;
};
