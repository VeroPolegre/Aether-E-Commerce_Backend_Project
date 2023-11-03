const { Game, Category, GamesCategories } = require("../models/index.js");

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
};

module.exports = GameController;
