("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        id: "03b96abf-299c-4a27-8e25-14ac6bd9e9a1",
        name: "Action",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "45f1e1c1-82d5-4bb0-8d21-67df2cbe7ec1",
        name: "Role-Playing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "f6f26736-87f3-4a72-81d0-745de7c9df24",
        name: "Strategy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "15a4edc4-dbed-4d84-8bf3-134ab3a5bd05",
        name: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "bf0e193b-9b7a-4de4-8a7c-25331b0ab06a",
        name: "Simulation",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "dba04ce0-794e-44f6-8d06-03c8ff98a511",
        name: "Sports & Racing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
