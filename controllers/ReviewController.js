const { Review, User, Game } = require("../models/index.js");

const ReviewController = {
  async create(req, res) {
    try {
      const requiredFields = ["rating", "text", "gameTitle"];
      const missingFields = [];

      requiredFields.forEach((field) => {
        if (!req.body[field]) {
          missingFields.push(field);
        }
      });

      if (missingFields.length > 0) {
        res.status(400).send({
          msg: "Missing required fields in the request body",
          missingFields,
        });
      } else {
        const UserId = req.user.id;
        const gameTitle = req.body.gameTitle;

        const game = await Game.findOne({ where: { title: gameTitle } });

        if (!game) {
          res.status(404).send({
            msg: "Game not found or invalid game title provided.",
          });
          return;
        }

        const GameId = game.id;

        const review = await Review.create({
          rating: req.body.rating,
          text: req.body.text,
          date: new Date(),
          UserId,
          GameId,
        });

        res.status(201).send({
          msg: "Review created successfully!",
          review,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error creating a review", err });
    }
  },

  async getAll(req, res) {
    try {
      const reviews = await Review.findAll({
        include: [
          {
            model: User,
            attributes: ["id", "name"],
          },
        ],
      });

      res.send(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).send("There has been a problem retrieving the reviews");
    }
  },
};

module.exports = ReviewController;
