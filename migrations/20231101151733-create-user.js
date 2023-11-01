const { User } = require("../models/user.js");
("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable("Users", User);
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Users");
  },
};
