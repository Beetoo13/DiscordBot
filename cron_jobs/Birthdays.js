var cron = require("node-cron");
const jsonBirthdays = require("../birthdays.json");

const isToday = (client) => {
  const date = new Date();
  const mainRoomChannelId = "164644900862820352";
  const testingChannelId = "911296752261398570";
  const emoteTesting = "<:HYPERS:927012687198695445>";
  const emoteMain = "<:HYPERS:923864282540703785>";
  const timezone = "America/Chihuahua";

  var day = date.getDate();
  var month = date.getMonth() + 1;

  cron.schedule(
    "0 0 * * *",
    () => {
      jsonBirthdays.arrayBirthdays.forEach((birthday) => {
        if (birthday.day == day && birthday.month == month) {
          console.log(
            `El día en json es: ${birthday.day} y el mes en json es: ${birthday.month}`
          );
          client.channels.cache
            .get(mainRoomChannelId)
            .send(
              "@everyone" +
                ", pasen a desearle feliz cumple a " +
                "<@" +
                birthday.userId +
                "> hoy en su día " +
                emoteMain
            );
        }
      });
    },
    {
      timezone: timezone,
    }
  );
};

module.exports = isToday;
