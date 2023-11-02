const { Category } = require("../models/index.js");

const CategoryController = {
  create(req, res) {
    Category.create(req.body)
      .then(
        res.status(201).send({
          message: `Category '${req.body.name}' created succesfully!`,
        })
      )
      .catch((err) => console.error(err));
  },

  async update(req, res) {
    await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send(`Category '${req.body.name}' updated succesfully!`);
  },
};

module.exports = CategoryController;
