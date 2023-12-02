const { Order, Game, OrdersGames, Library } = require("../models/index.js");

const OrderController = {
  async create(req, res) {
    try {
      const { games } = req.body; // Assuming games is an array of { GameId, quantity }

      if (!games || games.length === 0) {
        return res.status(400).json({ error: "Games array is required." });
      }

      const orderDetails = await Promise.all(
        games.map(async ({ GameId, quantity }) => {
          const selectedGame = await Game.findByPk(GameId);
          if (!selectedGame) {
            return res
              .status(404)
              .json({ error: `Game with ID ${GameId} not found.` });
          }

          return {
            GameId: selectedGame.id,
            gameTitle: selectedGame.title,
            date: new Date(),
            UserId: req.user.id,
            quantity,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
        })
      );

      const createdOrder = await Order.create({
        UserId: req.user.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await Promise.all(
        orderDetails.map(async (orderDetail) => {
          const createdOrderDetail = await OrdersGames.create({
            OrderId: createdOrder.id,
            GameId: orderDetail.GameId,
            quantity: orderDetail.quantity, // Store the quantity in OrdersGames
          });

          await Library.create({
            GameId: orderDetail.GameId,
            UserId: req.user.id,
          });

          return createdOrderDetail;
        })
      );

      res
        .status(201)
        .json({ message: "Order created successfully!", order: createdOrder });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating order.", err });
    }
  },

  async getAll(req, res) {
    try {
      const orders = await Order.findAll({
        include: [
          {
            model: OrdersGames,
            include: [Game],
          },
        ],
      });
      res.status(200).json({ orders });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error fetching orders.", err });
    }
  },
};

module.exports = OrderController;
