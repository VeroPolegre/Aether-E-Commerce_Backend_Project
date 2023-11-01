const { User, Token } = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const UserController = {
  create(req, res) {
    req.body.role = "user";
    const password = bcrypt.hashSync(req.body.password, 10);
    User.create({ ...req.body, password })
      .then((user) =>
        res.status(201).send({ message: "User created succesfully!", user })
      )
      .catch((err) => console.error(err));
  },

  changeRoleToAdmin(req, res) {
    const { userId } = req.params;
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        user
          .update({ role: "admin" })
          .then((updatedUser) => {
            res
              .status(200)
              .send({
                msg: `Updated ${user.name}'s role to admin`,
                updatedUser,
              });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  },

  changeRoleToUser(req, res) {
    const { userId } = req.params;
    User.findByPk(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        user
          .update({ role: "user" })
          .then((updatedUser) => {
            res
              .status(200)
              .send({
                msg: `Updated ${user.name}'s role to user`,
                updatedUser,
              });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res.status(400).send({ message: "Incorrect user or password" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Incorrect user or password" });
      }
      const token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token, UserId: user.id });
      res.send({ message: "Welcome " + user.name, user, token });
    });
  },
};

module.exports = UserController;
