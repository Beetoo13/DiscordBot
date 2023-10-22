// const { MessageEmbed } = require("discord.js");

// const diceEmbed = new MessageEmbed()
//   .setColor("#000000")
//   .setTitle("Hifumi")
//   .setAuthor("Tirar un dado", "https://i.imgur.com/W0hQgU8.jpg")
//   .setDescription("Acabo de tirar un dado y obtuviste un:")
//   .setThumbnail(
//     "https://images-na.ssl-images-amazon.com/images/I/51AqMK2I9nL.png"
//   )
//   .setFooter("Creado por Beto", "https://i.imgur.com/W0hQgU8.jpg");

// const randomNumber = () => {
//   let randomNum = Math.floor(Math.random() * (6 - 1 + 1) + 1);

//   if (randomNum == 1) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`,
//       randomNum
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png"
//     );
//   }

//   if (randomNum == 2) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`,
//       randomNum
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png"
//     );
//   }

//   if (randomNum == 3) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`,
//       randomNum
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png"
//     );
//   }

//   if (randomNum == 4) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`,
//       randomNum
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png"
//     );
//   }

//   if (randomNum == 5) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`,
//       randomNum
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png"
//     );
//   }

//   if (randomNum == 6) {
//     diceEmbed.setDescription(
//       `Acabo de tirar un dado y obtuviste un: **${randomNum}**`
//     );
//     diceEmbed.setImage(
//       "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"
//     );
//   }
// };

// const dice = (msg) => {
//   if (msg.content.toLowerCase() === "-dice") {
//     randomNumber();
//     msg.channel.send({ embed: diceEmbed });
//   }
// };

// module.exports = dice;
