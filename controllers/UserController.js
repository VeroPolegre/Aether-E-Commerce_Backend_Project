const { User, Order, Token } = require("../models/index.js");
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
      .catch((err) => {
        console.error("Error creating user:", error);
        res.status(500).send("An error occurred while creating the user.");
      });
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
      res.send({ message: "Welcome " + user.name + "!", user, token });
    });
  },

  getAll(req, res) {
    User.findAll({
      include: [Order],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Problem getting all users",
        });
      });
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization },
          ],
        },
      });
      res.send({ message: "Logged out succesfully!" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "There has been a problem logging out" });
    }
  },

  changeRoleToAdmin(req, res) {
    const { UserId } = req.params;
    User.findByPk(UserId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        user
          .update({ role: "admin" })
          .then((updatedUser) => {
            res.status(200).send({
              msg: `Updated ${user.name}'s role to admin`,
              updatedUser,
            });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  },

  changeRoleToUser(req, res) {
    const { UserId } = req.params;
    User.findByPk(UserId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }

        user
          .update({ role: "user" })
          .then((updatedUser) => {
            res.status(200).send({
              msg: `Updated ${user.name}'s role to user`,
              updatedUser,
            });
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  },

  async update(req, res) {
    const { name, password } = req.body;
    try {
      if (password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        await User.update(
          { name, password: hashedPassword },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      } else {
        await User.update(
          { name },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      }
      res.send(`User ${name} updated successfully!`);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send("An error occurred while updating the user.");
    }
  },

  async delete(req, res) {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    await Order.destroy({
      where: {
        UserId: req.params.id,
      },
    });
    res.send(`User deleted succesfully!`);
  },
};

module.exports = UserController;
