const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "hola") {
    msg.reply("yo robot");
  }
});

client.login("ODA0ODE3NzkzMjc0NDc4NjQy.YBR2-g.xxMvihunPjARYcACAESa6ygyAl8");
