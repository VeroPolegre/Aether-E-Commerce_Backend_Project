const { Order, User } = require("../models/index.js");

const OrderController = {
  getAll(req, res) {
    Order.findAll({
      include: [User],
    })
      .then((orders) => res.send(orders))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Problem retrieving orders",
        });
      });
  },
};

module.exports = OrderController;
