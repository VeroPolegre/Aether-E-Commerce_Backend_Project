const { Game } = require("../models/index.js");

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
};

module.exports = GameController;
