const {
  User,
  Order,
  Token,
  Review,
  Library,
  Game,
  Sequelize,
} = require("../models/index.js");
const transporter = require("../config/nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;

const UserController = {
  async create(req, res, next) {
    try {
      const hash = await bcrypt.hashSync(req.body.password, 10);

      const user = await User.create({
        ...req.body,
        password: hash,
        confirmed: false,
        role: "user",
      });

      const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, {
        expiresIn: "48h",
      });

      const url = "http://localhost:5173/confirmed/" + emailToken;
      await transporter.sendMail({
        to: req.body.email,

        subject: "Please confirm your email",

        html: `<h3> Welcome! You have to confirm your email address </h3>
        
        <a href="${url}"> Click here to confirm your email!</a>
        
        `,
      });
      res.status(201).send({ message: "User created successfully!", user });
    } catch (err) {
      console.error("Error creating user:", err);
      next(err);
    }
  },

  async confirm(req, res) {
    try {
      const emailToken = req.params.email;
      const payload = jwt.verify(emailToken, jwt_secret);
      await User.update(
        { confirmed: true },
        {
          where: {
            email: payload.email,
          },
        }
      );
      const user = await User.findOne({
        where: {
          email: payload.email,
        },
      });
      const token = jwt.sign({ id: user.id }, jwt_secret);
      await Token.create({ token, UserId: user.id });
      res.status(201).send({ msg: "User confirmed succesfully!", token, user });
    } catch (error) {
      console.error(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res.status(400).send({ message: "Incorrect user or password" });
      }

      if (!user.confirmed) {
        return res.status(400).send({ message: "Confirm your email" });
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).send({ message: "Incorrect user or password" });
      }

      const token = jwt.sign({ id: user.id }, jwt_secret);
      await Token.create({ token, UserId: user.id });
      res.send({ message: "Welcome " + user.name + "!", user, token });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).send("An error occurred during login.");
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.findAll({
        include: [
          {
            model: Review,
          },
          {
            model: Order,
          },
          {
            model: Library,
          },
        ],
      });
      res.send(users);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        message: "Problem getting all users",
      });
    }
  },

  async getById(req, res) {
    const userId = req.params.id;

    try {
      const user = await User.findByPk(userId, {
        include: [
          {
            model: Review,
          },
          {
            model: Order,
          },
          {
            model: Library,
          },
        ],
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      res.send(user);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "An error occurred while fetching the user" });
    }
  },

  async getInfo(req, res) {
    try {
      const user = await User.findByPk(req.user.id, {
        include: [
          {
            model: Review,
          },
          {
            model: Order,
          },
          {
            model: Library,
          },
        ],
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(user);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "An error occurred while fetching the user info" });
    }
  },

  async changeRoleToSuperAdmin(req, res) {
    const { UserId } = req.params;

    try {
      const user = await User.findByPk(UserId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const updatedUser = await user.update({ role: "superadmin" });
      res.status(200).send({
        msg: `Updated ${user.name}'s role to superadmin`,
        updatedUser,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred during role update.");
    }
  },

  async changeRoleToAdmin(req, res) {
    const { UserId } = req.params;

    try {
      const user = await User.findByPk(UserId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const updatedUser = await user.update({ role: "admin" });
      res.status(200).send({
        msg: `Updated ${user.name}'s role to admin`,
        updatedUser,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred during role update.");
    }
  },

  async changeRoleToUser(req, res) {
    const { UserId } = req.params;

    try {
      const user = await User.findByPk(UserId);

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const updatedUser = await user.update({ role: "user" });
      res.status(200).send({
        msg: `Updated ${user.name}'s role to user`,
        updatedUser,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred during role update.");
    }
  },

  async update(req, res) {
    const { name, email, password, avatar } = req.body;
    try {
      if (password) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        await User.update(
          { name, email, password: hashedPassword, avatar },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      } else {
        await User.update(
          { name, email, avatar },
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
};

module.exports = UserController;
