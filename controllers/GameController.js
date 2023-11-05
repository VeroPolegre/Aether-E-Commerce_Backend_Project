const {
  Game,
  Category,
  GamesCategories,
  Review,
  User,
  Sequelize,
} = require("../models/index.js");
const { Op } = Sequelize;

const GameController = {
  async create(req, res) {
    try {
      const requiredFields = [
        "title",
        "description",
        "release_date",
        "price",
        "genre",
        "platform",
        "rating",
      ];
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
        const game = await Game.create(req.body);

        await game.update({ LibraryId: req.user.id });

        res.status(201).send({
          msg: `Game '${req.body.title}' created successfully!`,
          game,
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error creating game.", err });
    }
  },

  async update(req, res) {
    try {
      const updatedGame = await Game.update(req.body, {
        where: { id: req.params.id },
      });
      updatedGame[0] === 1
        ? res
            .status(200)
            .send({ msg: `Game '${req.body.title}' updated succesfully!` })
        : res.status(404).send({ msg: `Game not found` });
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error updating a game", err });
    }
  },

  async delete(req, res) {
    try {
      await Game.destroy({
        where: { id: req.params.id },
      });
      await GamesCategories.destroy({
        where: {
          GameId: req.params.id,
        },
      });
      res.status(200).send({ msg: `Game with id '${req.params.id}' deleted.` });
    } catch (err) {
      console.error(err);
      res.status(404).send({ msg: "Error deleting a game", err });
    }
  },

  async getAll(req, res) {
    try {
      const game = await Game.findAll({
        include: [
          {
            model: Category,
            through: { attributes: [] },
          },
          {
            model: Review,
            include: [
              {
                model: User,
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });
      res.send(game);
    } catch (err) {
      console.error(err);
      res.status(500).send("There has been a problem retrieving the games");
    }
  },

  async getById(req, res) {
    try {
      const game = await Game.findByPk(req.params.id, {
        include: [
          {
            model: Category,
            through: { attributes: [] },
          },
          {
            model: Review,
            include: [
              {
                model: User,
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });

      if (game) {
        res.send(game);
      } else {
        res
          .status(404)
          .send({ msg: `Game with id ${req.params.id} not found` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "There has been a problem retrieving the game",
      });
    }
  },
  async getByTitle(req, res) {
    try {
      const game = await Game.findOne({
        where: {
          title: {
            [Op.like]: `%${req.params.title}%`,
          },
        },
        include: [
          {
            model: Category,
            through: { attributes: [] },
          },
          {
            model: Review,
            include: [
              {
                model: User,
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });

      if (game) {
        res.send(game);
      } else {
        res
          .status(404)
          .send({ msg: `Game with name '${req.params.title}' not found` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "There has been a problem retrieving the game",
      });
    }
  },

  async getByPrice(req, res) {
    try {
      const price = parseFloat(req.params.price);
      if (isNaN(price)) {
        return res.status(400).send("Invalid price format");
      }
      const game = await Game.findOne({
        where: {
          price: price,
        },
        include: [{ model: Category, through: { attributes: [] } }],
      });
      if (game) {
        res.send(game);
      } else {
        res.status(404).send("No game found with the specified price");
      }
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send("There has been a problem retrieving the game by price");
    }
  },

  async getByDescendingPrice(req, res) {
    try {
      const games = await Game.findAll({
        include: [{ model: Category, through: { attributes: [] } }],
        order: [["price", "DESC"]],
      });

      if (games.length > 0) {
        res.send(games);
      } else {
        res.status(404).send("No games found.");
      }
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send(
          "There has been a problem retrieving the games by descending price."
        );
    }
  },
};
module.exports = GameController;
