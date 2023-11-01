const { Token } = require("../models/token.js");
("use strict");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tokens", Token);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tokens");
  },
};
