const Discord = require("discord.js");

const agarrameWe = (msg) => {
  if (msg.content.toLowerCase() === "-agarramewe") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/JCAyU2b.png"
  );

  msg.channel.send(attachment);
};

module.exports = agarrameWe;
