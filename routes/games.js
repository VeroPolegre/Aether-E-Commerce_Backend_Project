const express = require("express");
const router = express.Router();

const GameController = require("../controllers/GameController");

router.post("/", GameController.create);
router.put("/id/:id", GameController.update);
router.delete("/id/:id", GameController.delete);

module.exports = router;
