const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const GameController = require("../controllers/GameController");

router.post("/", authentication, isAdmin, GameController.create);
router.put("/id/:id", authentication, isAdmin, GameController.update);
router.delete("/id/:id", authentication, isAdmin, GameController.delete);
router.get("/", authentication, GameController.getAll);
router.get("/id/:id", authentication, GameController.getById);
router.get("/title/:title", authentication, GameController.getByTitle);
router.get("/price/:price", authentication, GameController.getByPrice);
router.get("/desc-price", authentication, GameController.getByDescendingPrice);
module.exports = router;
