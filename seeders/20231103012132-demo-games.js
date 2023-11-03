("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Games", [
      {
        id: "1",
        title: "Super Mario Odyssey",
        description: "A beloved 3D platformer featuring Mario's adventures.",
        release_date: "2017-10-27 00:00:00",
        price: 45,
        genre: "Platformer",
        platform: "Nintendo Switch",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        title: "Red Dead Redemption 2",
        description: "A western-themed action-adventure game.",
        release_date: "2018-10-26 00:00:00",
        price: 59,
        genre: "Action",
        platform: "PlayStation 4",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        title: "Call of Duty: Warzone",
        description:
          "A popular battle royale game set in the Call of Duty universe.",
        release_date: "2020-03-10 00:00:00",
        price: 0,
        genre: "First-Person Shooter",
        platform: "PC",
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "4",
        title: "Minecraft",
        description: "A sandbox game that allows players to build and explore.",
        release_date: "2011-11-18 00:00:00",
        price: 29,
        genre: "Sandbox",
        platform: "PC",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5",
        title: "The Legend of Zelda: Breath of the Wild",
        description:
          "An action-adventure game set in the fantasy world of Hyrule.",
        release_date: "2017-03-03 00:00:00",
        price: 49,
        genre: "Action-Adventure",
        platform: "Nintendo Switch",
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "6",
        title: "Cyberpunk 2077",
        description: "A futuristic open-world RPG with a cyberpunk theme.",
        release_date: "2020-12-10 00:00:00",
        price: 49,
        genre: "Action RPG",
        platform: "PC",
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
