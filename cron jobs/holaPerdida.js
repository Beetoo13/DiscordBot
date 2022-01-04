const Discord = require("discord.js");
var cron = require("node-cron");

const holaPerdida = (client) => {
  const mainRoomChannelId = "164644900862820352";
  const testingChannelId = "911296752261398570";
  const betoUserId = "137441068315574272";
  const gabyUserId = "265738195965181954";
  const timezone = "America/Chihuahua";

  cron.schedule(
    "0 9 * * mon",
    () => {
      client.channels.cache
        .get(mainRoomChannelId)
        .send("<@" + gabyUserId + ">" + " Hola perdida 👀");
    },
    {
      timezone: timezone,
    }
  );

  // cron.schedule("40 17 * * *", () => {
  //   client.channels.cache
  //     .get(testingChannelId)
  //     .send("<@" + betoUserId + ">" + " Hola perdida 👀");
  // });
};

module.exports = holaPerdida;
