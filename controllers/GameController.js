const {
  Game,
  Category,
  GamesCategories,
  Sequelize,
} = require("../models/index.js");
const { Op } = Sequelize;

const GameController = {
  async create(req, res) {
    try {
      const game = await Game.create(req.body);
      game.addCategory(req.body.CategoryId);
      res.status(201).send({
        msg: `Game '${req.body.title}' created succesfully!`,
        game,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error creating a game", err });
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
        include: [{ model: Category, throught: { attributes: [] } }],
      });
      res.send(game);
    } catch (err) {
      console.error(err);
      res.status(500).send("There has been a problem retrieving the games");
    }
  },

  async getById(req, res) {
    try {
      const game = await Game.findByPk(req.params.id);
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
      const minPrice = parseFloat(req.query.minPrice) || 0;
      const maxPrice =
        parseFloat(req.query.maxPrice) || Number.MAX_SAFE_INTEGER;

      const games = await Game.findAll({
        where: {
          price: {
            [Op.between]: [minPrice, maxPrice],
          },
        },
        include: [{ model: Category, through: { attributes: [] } }],
      });

      res.send(games);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send("There has been a problem retrieving the games by price");
    }
  },
};

module.exports = GameController;
