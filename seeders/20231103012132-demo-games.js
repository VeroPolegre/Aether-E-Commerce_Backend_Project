("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Games", [
      {
        id: "3c83a50a-2073-4c90-8f16-1250bf40a689",
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
        id: "41f08c1d-7420-4c1e-967c-0d36b2c6759d",
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
        id: "5f64d953-2a7b-4a82-8c52-983ce74ad1e1",
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
        id: "7f3b24e9-64bb-48d0-bd72-554d8a634d6f",
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
        id: "4f0f05cd-0fc2-4a9b-b98a-47b1b9fcb77b",
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
        id: "f1a79df0-8cb2-4f3d-8b9d-7c3f0a932d4c",
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
