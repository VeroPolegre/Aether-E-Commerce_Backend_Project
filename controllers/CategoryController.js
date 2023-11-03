const { Category, Game, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

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
      .then((category) => res.send(category))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "There has been a problem retrieving the categories",
        });
      });
  },

  getById(req, res) {
    Category.findByPk(req.params.id, {
      // include: [Game],
    })
      .then((category) => res.send(category))
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "There has been a problem retrieving the categories",
        });
      });
  },

  getByName(req, res) {
    Category.findOne({
      where: {
        name: {
          [Op.like]: `%${req.params.name}%`,
        },
      },
      // include: [Game],
    })
      .then((category) => res.send(category))
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          message: "There has been a problem retrieving the categories",
        });
      });
  },
};
module.exports = CategoryController;
