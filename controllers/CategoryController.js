const { Category, Game } = require("../models/index.js");

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

  async delete(req, res) {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res;
  },

  getAll(req, res) {
    Category.findAll({
      // include: [Game],
    })
      .then((categories) => res.send(categories))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There has been a problem retrieving the categories",
        });
      });
  },
};
module.exports = CategoryController;
