const { User } = require("../models/index.js");

const UserController = {
  create(req, res) {
    req.body.role = "user";
    User.create(req.body)
      .then((user) =>
        res.status(201).send({ message: "User created succesfully!", user })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = UserController;
