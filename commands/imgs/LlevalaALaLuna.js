const Discord = require("discord.js");

const llevalaALaLuna = (msg) => {
  if (msg.content.toLowerCase() === "-llevalaalaluna") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/b2UJfYh.png"
  );

  msg.channel.send(attachment);
};

module.exports = llevalaALaLuna;
