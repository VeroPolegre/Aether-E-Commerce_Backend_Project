const { User } = require("../models/index.js");
const bcrypt = require("bcryptjs");

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
      res.send(user);
    });
  },
};

module.exports = UserController;
