("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: "1",
        name: "Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Role-Playing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Strategy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4",
        name: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5",
        name: "Simulation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "6",
        name: "Sports & Racing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
