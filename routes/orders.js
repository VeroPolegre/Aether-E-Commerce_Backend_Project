const express = require("express");
const OrderController = require("../controllers/OrderController.js");
const router = express.Router();

router.post("/create", OrderController.create);
// router.get("/", OrderController.getAll);
module.exports = router;
