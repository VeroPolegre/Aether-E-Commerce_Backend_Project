const { Order, Game } = require("../models/index.js");

const OrderController = {
  create(req, res) {
    Order.create(req.body)
      .then((order) => {
        order.addGame(req.body.GameId);
        res.status(200).send({ message: "Order placed successfully!", order });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send({
          message: "Problem creating the order",
        });
      });
  },
  getAll(req, res) {
    Order.findAll({
      include: [Game],
    })
      .then((orders) => res.send(orders))
      .catch((error) => {
        console.error(error);
        res.status(500).send({
          message: "Problem retrieving orders",
        });
      });
  },
};

module.exports = OrderController;
