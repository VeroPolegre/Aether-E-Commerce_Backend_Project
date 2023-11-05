const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const ReviewController = require("../controllers/ReviewController.js");

router.post("/", authentication, isAdmin, ReviewController.create);

module.exports = router;
