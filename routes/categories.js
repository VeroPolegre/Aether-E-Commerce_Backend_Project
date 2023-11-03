const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const CategoryController = require("../controllers/CategoryController");

router.post("/", authentication, isAdmin, CategoryController.create);
router.put("/id/:id", authentication, isAdmin, CategoryController.update);
router.delete("/id/:id", authentication, isAdmin, CategoryController.delete);
router.get("/", authentication, CategoryController.getAll);
router.get("/id/:id", authentication, CategoryController.getById);
router.get("/name/:name", authentication, CategoryController.getByName);

module.exports = router;
