"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const gameReviews = [
      {
        rating: 5,
        text: "Super Mario Odyssey is a delightful adventure featuring everyone's favorite plumber. The gameplay is incredibly fun, and the variety of worlds keeps things fresh. I couldn't put it down!",
        date: "2023-10-01 12:00:00",
      },
      {
        rating: 4,
        text: "Red Dead Redemption 2 offers an immersive open-world experience set in the Wild West. The attention to detail is astonishing, and the story is gripping. The only drawback is the slow pacing.",
        date: "2023-10-02 15:30:00",
      },
      {
        rating: 3,
        text: "Call of Duty: Warzone is a fast-paced battle royale game. It's enjoyable, but the constant updates and occasional balance issues can be frustrating. Still, it's a solid shooter.",
        date: "2023-10-03 18:45:00",
      },
      {
        rating: 4,
        text: "Minecraft is a creative paradise. The freedom to build and explore is amazing. The graphics are blocky, but that's part of its charm. Perfect for unleashing your imagination.",
        date: "2023-10-04 10:20:00",
      },
      {
        rating: 5,
        text: "The Legend of Zelda: Breath of the Wild is a masterpiece. The open world is breathtaking, and the puzzles are ingenious. This is a must-play for any gaming enthusiast!",
        date: "2023-10-05 14:15:00",
      },
      {
        rating: 3,
        text: "Cyberpunk 2077 had high expectations but fell short. The game has potential, but it's plagued with bugs and performance issues. The story is intriguing, though.",
        date: "2023-10-06 11:30:00",
      },
      {
        rating: 4,
        text: "Forza Horizon offers a massive open world with a variety of cars and events. The graphics are stunning, and the gameplay is addictive. A must-try for racing fans.",
        date: "2023-10-07 17:10:00",
      },
      {
        rating: 5,
        text: "Hades is an exceptional roguelike with a captivating narrative and Greek mythology themes. The combat is fluid, and the characters are memorable. It's a gem.",
        date: "2023-10-08 13:45:00",
      },
      {
        rating: 4,
        text: "Elden Ring combines Miyazaki's genius with George R. R. Martin's storytelling. The open world is vast, and the combat is challenging. A must-play for RPG lovers.",
        date: "2023-10-09 16:05:00",
      },
      {
        rating: 5,
        text: "Stardew Valley is a charming farming simulation game. The pixel art is delightful, and the gameplay is addictive. It's a peaceful escape from the real world.",
        date: "2023-10-10 19:25:00",
      },
      {
        rating: 3,
        text: "Assassin's Creed: Valhalla is a decent adventure in the Viking Age. The visuals are impressive, but the story lacks depth. An enjoyable but forgettable experience.",
        date: "2023-10-11 09:40:00",
      },
      {
        rating: 4,
        text: "The Witcher 3: Wild Hunt is a fantasy masterpiece. The open world is vast, and the quests are engaging. It's a journey every RPG enthusiast should undertake.",
        date: "2023-10-12 22:00:00",
      },
      {
        rating: 5,
        text: "Civilization VI is a fantastic strategy game. The depth of gameplay is unparalleled, and the historical elements add immersion. A strategy lover's dream.",
        date: "2023-10-13 20:15:00",
      },
      {
        rating: 4,
        text: "Uncharted 4: A Thief's End is a thrilling adventure with stunning visuals. The characters and story are top-notch. A must-play for action-adventure fans.",
        date: "2023-10-14 08:55:00",
      },
      {
        rating: 3,
        text: "The Sims 4 offers life simulation with endless possibilities. However, the DLC can be expensive, and some players may find it shallow. Still, it's enjoyable.",
        date: "2023-10-15 21:30:00",
      },
      {
        rating: 4,
        text: "FIFA 23 is a solid soccer game with realistic graphics and gameplay. It captures the essence of the sport, making it a must-have for soccer enthusiasts.",
        date: "2023-10-16 07:10:00",
      },
      {
        rating: 5,
        text: "StarCraft II: Wings of Liberty is a classic real-time strategy game. The campaign is engaging, and the competitive scene is thriving. A true RTS gem.",
        date: "2023-10-17 23:25:00",
      },
      {
        rating: 3,
        text: "Horizon Zero Dawn is visually impressive with its robotic creatures, but the story doesn't live up to the world's potential. A beautiful but flawed experience.",
        date: "2023-10-18 09:20:00",
      },
      {
        rating: 4,
        text: "NBA 2K22 delivers a realistic basketball experience with outstanding gameplay. The microtransactions can be a downside, but it's a slam dunk for sports fans.",
        date: "2023-10-19 19:00:00",
      },
      {
        rating: 5,
        text: "Dark Souls III is a challenging and dark RPG with intense combat. The level design and lore are exceptional. A must-play for hardcore gamers.",
        date: "2023-10-20 15:40:00",
      },
    ];

    const gameIds = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
    ];

    const userIds = ["55", "33", "1", "2", "3", "4", "5"];
    const reviews = gameReviews.map((review, index) => ({
      id: (index + 1).toString(),
      rating: review.rating,
      text: review.text,
      date: review.date,
      UserId: userIds[index % userIds.length],
      GameId: gameIds[index],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert("Reviews", reviews, {});
  },

  async down(queryInterface, Sequelize) {},
};
