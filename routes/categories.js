const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const CategoryController = require("../controllers/CategoryController");

router.post("/", authentication, isAdmin, CategoryController.create);
router.put("/:id", authentication, isAdmin, CategoryController.update);

module.exports = router;
