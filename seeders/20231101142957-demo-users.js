const bcrypt = require("bcryptjs");
("use strict");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: "03b96abf-299c-4a27-8e25-14ac6bd9e9a1",
        name: "Vero",
        email: "vero@example.com",
        password: bcrypt.hashSync("adminadmin", 10),
        avatar: "https://example.com/avatar1.jpg",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "45f1e1c1-82d5-4bb0-8d21-67df2cbe7ec1",
        name: "User1",
        email: "user1@example.com",
        password: bcrypt.hashSync("userpassword1", 10),
        avatar: "https://example.com/avatar2.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "f6f26736-87f3-4a72-81d0-745de7c9df24",
        name: "User2",
        email: "user2@example.com",
        password: bcrypt.hashSync("userpassword2", 10),
        avatar: "https://example.com/avatar3.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "15a4edc4-dbed-4d84-8bf3-134ab3a5bd05",
        name: "User3",
        email: "user3@example.com",
        password: bcrypt.hashSync("userpassword3", 10),
        avatar: "https://example.com/avatar4.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "bf0e193b-9b7a-4de4-8a7c-25331b0ab06a",
        name: "User4",
        email: "user4@example.com",
        password: bcrypt.hashSync("userpassword4", 10),
        avatar: "https://example.com/avatar5.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dba04ce0-794e-44f6-8d06-03c8ff98a511",
        name: "User5",
        email: "user5@example.com",
        password: bcrypt.hashSync("userpassword5", 10),
        avatar: "https://example.com/avatar6.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
