"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrdersGames extends Model {
    static associate(models) {
      // no association here
    }
  }
  OrdersGames.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      OrderId: DataTypes.UUID,
      GameId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "OrdersGames",
    }
  );
  return OrdersGames;
};
