const express = require("express");
const router = express.Router();

const GameController = require("../controllers/GameController");

router.post("/", GameController.create);

module.exports = router;
