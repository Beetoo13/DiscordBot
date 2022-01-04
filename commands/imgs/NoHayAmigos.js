const Discord = require("discord.js");

const noHayAmigos = (msg) => {
  if (msg.content.toLowerCase() === "-nohayamigos") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/6ux2P8j.jpg"
  );

  msg.channel.send(attachment);
};

module.exports = noHayAmigos;
