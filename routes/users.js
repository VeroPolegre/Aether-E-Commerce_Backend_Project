const express = require("express");
const router = express.Router();
const {
  authentication,
  isAdmin,
  isSuperAdmin,
} = require("../middleware/authentication");
const UserController = require("../controllers/UserController");

router.post("/", UserController.create);
router.get("/confirm/:email", UserController.confirm);
router.post("/login", UserController.login);
router.get("/", authentication, UserController.getAll);
router.put(
  "/:UserId/changeRoleToSuperAdmin",
  authentication,
  isSuperAdmin,
  UserController.changeRoleToSuperAdmin
);
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
router.delete("/id/:id", authentication, isAdmin, UserController.delete);
router.delete("/logout", authentication, UserController.logout);
module.exports = router;
