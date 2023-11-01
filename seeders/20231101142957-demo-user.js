"use strict";
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        uuid: uuidv4(),
        name: "User 1",
        email: "user1@gmail.com",
        password: "password123",
        avatar: "https://example.com/avatar1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
