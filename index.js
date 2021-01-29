const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "hola") {
    msg.reply("yo robot");
  }
});

client.login(process.env.BOT_TOKEN);
