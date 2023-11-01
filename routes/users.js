const express = require("express");
const router = express.Router();
// const { authentication, isAdmin } = require("../middlewares/authentication");
const UserController = require("../controllers/UserController");

router.post("/", UserController.create);
router.post("/login", UserController.login);
// router.post("/changeRole", authentication, isAdmin, UserController.changeRole);
router.put("/:userId/changeRoleToAdmin", UserController.changeRoleToAdmin);
module.exports = router;
