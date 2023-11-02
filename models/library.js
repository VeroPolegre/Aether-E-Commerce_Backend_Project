"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    static associate(models) {
      Library.belongsTo(models.User);
      Library.hasMany(models.Game);
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
