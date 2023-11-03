"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "GamesCategories",
      [
        {
          id: 1,
          GameId: 1,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          GameId: 2,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          GameId: 3,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          GameId: 4,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          GameId: 5,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          GameId: 6,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          GameId: 7,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          GameId: 8,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          GameId: 9,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          GameId: 10,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          GameId: 11,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          GameId: 12,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          GameId: 13,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          GameId: 14,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          GameId: 15,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          GameId: 16,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          GameId: 17,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          GameId: 18,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          GameId: 19,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          GameId: 20,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
