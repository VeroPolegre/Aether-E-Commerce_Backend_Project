const express = require("express");
const router = express.Router();
const { authentication, isAdmin } = require("../middleware/authentication");
const UserController = require("../controllers/UserController");

router.post("/", UserController.create);
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
router.get("/", authentication, UserController.getAll);
router.put("/:id", authentication, UserController.update);
router.delete("/:id", authentication, isAdmin, UserController.delete);
router.post("/login", UserController.login);
router.delete("/logout", authentication, UserController.logout);
module.exports = router;
