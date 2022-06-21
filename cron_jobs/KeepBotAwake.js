const Discord = require("discord.js");
var cron = require("node-cron");

const botAwake = () => {
  const timezone = "America/Chihuahua";

  cron.schedule(
    "*/3 * * * *",
    () => {
      let timestamp = new Date().toLocaleString().replace(",", "");
      console.log("Keeping the bot awake, timestamp: ", timestamp);
    },
    {
      timezone: timezone,
    }
  );
};

module.exports = botAwake;
