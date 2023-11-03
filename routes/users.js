const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const UserController = require("../controllers/UserController");

router.post("/", UserController.create);
router.post("/login", UserController.login);
router.get("/", authentication, UserController.getAll);
router.put(
  "/:UserId/changeRoleToAdmin",
  authentication,
  isAdmin,
  UserController.changeRoleToAdmin
);
router.put(
  "/:UserId/changeRoleToUser",
  authentication,
  isAdmin,
  UserController.changeRoleToUser
);
router.put("/id/:id", authentication, UserController.update);
router.delete("/logout", authentication, UserController.logout);
router.delete("/id/:id", authentication, isAdmin, UserController.delete);
module.exports = router;
