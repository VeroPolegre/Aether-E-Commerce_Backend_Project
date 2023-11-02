"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },

      date: DataTypes.DATE,
      total: DataTypes.DECIMAL,

      UserId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
