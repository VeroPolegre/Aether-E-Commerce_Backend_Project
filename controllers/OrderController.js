const { Order, Game, OrdersGames } = require("../models/index.js");

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
        gameTitle: selectedGame.title,
        quantity,
        total: totalPrice,
      };

      const createdOrder = await Order.create(order);

      await OrdersGames.create({
        OrderId: createdOrder.id,
        GameId: selectedGame.id,
      });

      res
        .status(201)
        .json({ message: "Order created successfully", order: createdOrder });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating order.", err });
    }
  },
};

module.exports = OrderController;
