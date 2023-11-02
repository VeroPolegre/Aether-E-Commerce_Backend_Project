const { Category } = require("../models/index.js");

const CategoryController = {
  create(req, res) {
    Category.create(req.body)
      .then(
        res
          .status(201)
          .send({ message: "Category created succesfully!", category })
      )
      .catch((err) => console.error(err));
  },
};

module.exports = CategoryController;
