const Discord = require("discord.js");
var cron = require("node-cron");

const links = [
  "https://c.tenor.com/8_Yv5pnVQJAAAAAC/psy-dance.gif",
  "https://c.tenor.com/ampW8g8v-vMAAAAM/hack-khaby.gif",
  "https://c.tenor.com/evXZ_kpDbtAAAAAC/khaby-khabane.gif",
  "https://c.tenor.com/v7urNRQHWCoAAAAC/oxxo-ni%C3%B1o.gif",
  "https://i.imgur.com/1xBhNWo.jpg",
];

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const ferDirectMessage = (client) => {
  var randomNum = generateRandomNumber(0, links.length - 1);
  var randomLink = links[randomNum];

  const timezone = "America/Chihuahua";
  const ferDiscordId = "818365643308662784";
  const attachment = new Discord.MessageAttachment(randomLink);

  cron.schedule(
    "0 9 1 1-12 *",
    () => {
      client.users.cache.get(ferDiscordId).send(attachment);
    },
    {
      timezone: timezone,
    }
  );
};

module.exports = ferDirectMessage;
