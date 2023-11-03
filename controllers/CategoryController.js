const {
  Category,
  Game,
  GamesCategories,
  Sequelize,
} = require("../models/index.js");
const { Op } = Sequelize;

const CategoryController = {
  async create(req, res) {
    try {
      const category = await Category.create(req.body);
      res.status(201).send({
        msg: `Category '${req.body.name}' created succesfully!`,
        category,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error creating category.", err });
    }
  },

  async update(req, res) {
    try {
      const updatedCategory = await Category.update(req.body, {
        where: { id: req.params.id },
      });
      updatedCategory[0] === 1
        ? res
            .status(200)
            .send({ msg: `Category '${req.body.name}' updated succesfully!` })
        : res.status(404).send({ msg: `Category not found` });
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: "Error updating category.", err });
    }
  },

  async delete(req, res) {
    try {
      await Category.destroy({
        where: { id: req.params.id },
      });
      await GamesCategories.destroy({
        where: {
          ProductId: req.params.id,
        },
      }),
        res
          .status(200)
          .send({ msg: `Category with id ${req.params.id} deleted.` });
    } catch (err) {
      console.error(err);
      res.status(404).send(err);
    }
  },

  async getAll(req, res) {
    try {
      const category = await Category.findAll({
        include: [{ model: Game, through: { attributes: [] } }],
      });
      res.send(category);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send("There has been a problem retrieving the categories");
    }
  },

  async getById(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        res.send(category);
      } else {
        res
          .status(404)
          .send({ msg: `Category with id ${req.params.id} not found` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "There has been a problem retrieving the categories",
      });
    }
  },

  async getByName(req, res) {
    try {
      const category = await Category.findOne({
        where: {
          name: {
            [Op.like]: `%${req.params.name}%`,
          },
        },
      });

      if (category) {
        res.send(category);
      } else {
        res
          .status(404)
          .send({ msg: `Category with name '${req.params.name}' not found` });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({
        message: "There has been a problem retrieving the categories",
      });
    }
  },
};

module.exports = CategoryController;
