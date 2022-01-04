const Discord = require("discord.js");

const dance = (msg) => {
  if (msg.content.toLowerCase() !== "-dance") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/DP8xxd7.gif"
  );

  msg.channel.send(attachment);
};

module.exports = dance;
