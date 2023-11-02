const bcrypt = require("bcryptjs");
("use strict");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: 1,
        name: "Vero",
        email: "vero@example.com",
        password: bcrypt.hashSync("adminadmin", 10),
        avatar: "https://example.com/avatar1.jpg",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
