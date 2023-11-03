const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const CategoryController = require("../controllers/CategoryController");

router.post("/", authentication, isAdmin, CategoryController.create);
router.put("/:id", authentication, isAdmin, CategoryController.update);
router.delete("/:id", authentication, isAdmin, CategoryController.delete);
router.get("/", authentication, CategoryController.getAll);

module.exports = router;
