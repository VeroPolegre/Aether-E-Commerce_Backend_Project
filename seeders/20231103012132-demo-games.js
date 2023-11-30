("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Games", [
      {
        id: "1",
        title: "Super Mario Odyssey",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/915/867/642/4k-cappy-super-mario-odyssey-mario-wallpaper-58b60da80080fc0860cc710e2862c41a.jpg",
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
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/724/247/605/red-dead-red-dead-redemption-2-arthur-morgan-wallpaper-18f62d287050dc38f05c31ee08d2744a.jpg",
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
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/59/467/740/activision-call-of-duty-modern-warfare-2-call-of-duty-warzone-cod-vanguard-playstation-hd-wallpaper-2b364c4d23a15f89a5e47b99cdcc2ce0.jpg",
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
        image_path:
          "https://c4.wallpaperflare.com/wallpaper/226/682/452/minecraft-waterfall-video-games-wallpaper-preview.jpg",
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
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/577/179/802/the-legend-of-zelda-video-games-the-legend-of-zelda-breath-of-the-wild-link-wallpaper-793088ed411a2d1b7657b84f103186ad.jpg",
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
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/943/63/773/cyberpunk-2077-cyberpunk-video-games-wallpaper-1920684d611acd1b5677988f1051265d.jpg",
        description: "A futuristic open-world RPG with a cyberpunk theme.",
        release_date: "2020-12-10 00:00:00",
        price: 49,
        genre: "Action RPG",
        platform: "PC",
        rating: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7",
        title: "Forza Horizon",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/133/889/69/4k-e3-2018-forza-horizon-4-poster-wallpaper-c8965d4880f09c28a0bc210e2862949a.jpg",
        description:
          "An open-world racing game featuring a wide variety of cars and events.",
        release_date: "2012-10-23 00:00:00",
        price: 39,
        genre: "Sports & Racing",
        platform: "Xbox 360",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8",
        title: "Hades",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/556/514/424/hades-game-video-game-art-video-games-digital-art-artwork-hd-wallpaper-e9d058fd213a9dcb7627b8df1041f62d.jpg",
        description:
          "An action roguelike game with a unique narrative and Greek mythology themes.",
        release_date: "2020-09-17 00:00:00",
        price: 24,
        genre: "Roguelike",
        platform: "Nintendo Switch",
        rating: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "9",
        title: "Elden Ring",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/1/398/339/elden-ring-landscape-game-art-video-game-art-video-games-hd-wallpaper-078f02646fe5bffa3f62747121a19735.jpg",
        description:
          "A highly anticipated open-world action RPG created by Hidetaka Miyazaki and George R. R. Martin.",
        release_date: "2022-02-25 00:00:00",
        price: 59,
        genre: "Action RPG",
        platform: "PlayStation 5",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "10",
        title: "Stardew Valley",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/714/989/207/stardew-valley-wallpaper-e9d078bd314abddbb69728eff04136bd.jpg",
        description:
          "A farming simulation game where you can build your dream farm.",
        release_date: "2016-02-26 00:00:00",
        price: 14,
        genre: "Simulation",
        platform: "PC",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "11",
        title: "Assassin's Creed: Valhalla",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/71/465/126/assassin-s-creed-video-games-assassin-s-creed-valhalla-assassin-s-creed-valhalla-assassins-creed-valhalla-hd-wallpaper-13b7d2ea238a33027611e4e0b0db59b2.jpg",
        description: "An action-adventure game set in the Viking Age.",
        release_date: "2020-11-10 00:00:00",
        price: 49,
        genre: "Action",
        platform: "Xbox Series X",
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "12",
        title: "The Witcher 3: Wild Hunt",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/665/421/66/the-witcher-3-wild-hunt-geralt-of-rivia-ciri-wallpaper-f826bde8c0407c78000c41ce68c244ba.jpg",
        description:
          "An open-world role-playing game with a rich fantasy world.",
        release_date: "2015-05-19 00:00:00",
        price: 39,
        genre: "Role-Playing",
        platform: "PlayStation 4",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "13",
        title: "Civilization VI",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/446/346/574/sid-meier-s-civilization-vi-fantasy-art-artwork-statue-wallpaper-d8c6fd482090dc88c06c919ed8b2944a.jpg",
        description: "A turn-based strategy game where you build an empire.",
        release_date: "2016-10-21 00:00:00",
        price: 29,
        genre: "Strategy",
        platform: "PC",
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "14",
        title: "Uncharted 4: A Thief's End",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/123/309/248/uncharted-4-a-thief-s-end-uncharted-wallpaper-c9f0a87d014a0dab46c7c82f00d126bd.jpg",
        description:
          "An action-adventure game following Nathan Drake's adventures.",
        release_date: "2016-05-10 00:00:00",
        price: 39,
        genre: "Adventure",
        platform: "PlayStation 4",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "15",
        title: "The Sims 4",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/368/820/976/sims-4-sims-simscity-the-sims-4-wallpaper-4876cc9acfacb7495e102972c2599be0.jpg",
        description: "A life simulation game where you control virtual people.",
        release_date: "2014-09-02 00:00:00",
        price: 19,
        genre: "Simulation",
        platform: "PC",
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "16",
        title: "FIFA 23",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/155/8/895/soccer-cristiano-ronaldo-juventus-f-c-portuguese-wallpaper-891018cdc10add5b2697f8cff08196ad.jpg",
        description:
          "A soccer sports game with realistic graphics and gameplay.",
        release_date: "2022-09-15 00:00:00",
        price: 59,
        genre: "Sports & Racing",
        platform: "PlayStation 5",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "17",
        title: "StarCraft II: Wings of Liberty",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/827/176/890/starcraft-ii-starcraft-james-raynor-cat-wallpaper-7960b8edc1ea0dbbd64728dfa071161d.jpg",
        description: "A real-time strategy game set in a sci-fi universe.",
        release_date: "2010-07-27 00:00:00",
        price: 19,
        genre: "Strategy",
        platform: "PC",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "18",
        title: "Horizon Zero Dawn",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/484/990/533/horizon-ii-forbidden-west-aloy-horizon-zero-dawn-horizon-forbidden-west-hd-wallpaper-08d6cde8f0b0ecd8f04cf1ce78b2f4fa.jpg",
        description:
          "An action RPG set in a post-apocalyptic world with robotic creatures.",
        release_date: "2017-02-28 00:00:00",
        price: 39,
        genre: "Action",
        platform: "PlayStation 4",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "19",
        title: "NBA 2K22",
        image_path:
          "https://c1.wallpaperflare.com/path/867/765/71/basketball-spalding-ball-sport-8b595dfaf48477235cb26d0948cef8ed.jpg",
        description:
          "A basketball sports game featuring realistic gameplay and graphics.",
        release_date: "2021-09-10 00:00:00",
        price: 49,
        genre: "Sports & Racing",
        platform: "Xbox Series X",
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "20",
        title: "Dark Souls III",
        image_path:
          "https://r4.wallpaperflare.com/wallpaper/932/64/909/video-games-artwork-dark-souls-iii-dark-souls-wallpaper-69d0585dd18a1d1b26c7f81f2091562d.jpg",
        description:
          "A challenging action RPG with dark fantasy themes and intense combat.",
        release_date: "2016-04-12 00:00:00",
        price: 39,
        genre: "Action",
        platform: "Xbox One",
        rating: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
