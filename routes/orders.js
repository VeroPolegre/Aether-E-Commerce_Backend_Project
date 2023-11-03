const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const OrderController = require("../controllers/OrderController.js");

router.post("/", authentication, OrderController.create);
router.get("/", authentication, OrderController.getAll);
module.exports = router;
