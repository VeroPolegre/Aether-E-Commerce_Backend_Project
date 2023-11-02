const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
("use strict");
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: uuidv4(),
        name: "Vero",
        email: "vero@example.com",
        password: bcrypt.hashSync("adminadmin", 10),
        avatar: "https://example.com/avatar1.jpg",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "User1",
        email: "user1@example.com",
        password: bcrypt.hashSync("userpassword1", 10),
        avatar: "https://example.com/avatar2.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "User2",
        email: "user2@example.com",
        password: bcrypt.hashSync("userpassword2", 10),
        avatar: "https://example.com/avatar3.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "User3",
        email: "user3@example.com",
        password: bcrypt.hashSync("userpassword3", 10),
        avatar: "https://example.com/avatar4.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "User4",
        email: "user4@example.com",
        password: bcrypt.hashSync("userpassword4", 10),
        avatar: "https://example.com/avatar5.jpg",
        role: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
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
