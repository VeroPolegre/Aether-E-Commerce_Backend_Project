const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const ReviewController = require("../controllers/ReviewController.js");

router.post("/", authentication, ReviewController.create);
router.get("/", authentication, ReviewController.getAll);

module.exports = router;
