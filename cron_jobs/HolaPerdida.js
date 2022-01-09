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
        .send(
          "<@" + gabyUserId + ">" + " Hola perdida, buen inicio de semana 👀"
        );
    },
    {
      timezone: timezone,
    }
  );

  cron.schedule(
    "0 9 * * fri",
    () => {
      client.channels.cache
        .get(mainRoomChannelId)
        .send("<@" + gabyUserId + ">" + " Hola perdida, buen fin de semana 👀");
    },
    {
      timezone: timezone,
    }
  );
};

module.exports = holaPerdida;
