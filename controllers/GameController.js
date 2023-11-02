const { Game } = require("../models/index.js");

const GameController = {
  create(req, res) {
    Game.create(req.body)
      .then((game) =>
        res.status(201).send({ message: "Game created succesfully!", game })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = GameController;
