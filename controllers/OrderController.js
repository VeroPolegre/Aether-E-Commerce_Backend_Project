const { Order, Game } = require("../models/index.js");

const OrderController = {
  async create(req, res) {
    try {
      const { GameId, quantity } = req.body;
      if (!GameId || !quantity) {
        return res
          .status(400)
          .json({ error: "Both GameId and quantity are required." });
      }
      const selectedGame = await Game.findByPk(GameId);
      if (!selectedGame) {
        return res.status(404).json({ error: "Game not found." });
      }
      const totalPrice = selectedGame.price * quantity;
      const order = {
        GameId: selectedGame.id,
        gameTitle: selectedGame.title,
        quantity,
        total: totalPrice,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      res.status(201).json({ message: "Order created successfully", order });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating order.", err });
    }
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
