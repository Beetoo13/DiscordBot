const Discord = require("discord.js");

const lloriquin = (msg) => {
  if (msg.content.toLowerCase() === "-lloriquin") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/OponPhY.png"
  );

  msg.channel.send(attachment);
};

module.exports = lloriquin;
