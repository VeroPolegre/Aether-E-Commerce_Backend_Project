const { Game } = require("../models/index.js");

const GameController = {
  create(req, res) {
    Game.create(req.body)
      .then(
        (game) => game.addCategory(req.body.CategoryId),
        res.status(201).send({ message: "Game created succesfully!" })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = GameController;
