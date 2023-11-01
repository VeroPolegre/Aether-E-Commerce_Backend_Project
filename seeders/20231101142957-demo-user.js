"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 6,
        name: "Vero",
        email: "vero@example.com",
        password: "adminadmin",
        avatar: "https://example.com/avatar1.jpg",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
