const Discord = require("discord.js");

const paQueLoBorra = (msg) => {
  if (msg.content.toLowerCase() === "-paqueloborra") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/N3cziXj.jpg"
  );

  msg.channel.send(attachment);
};

module.exports = paQueLoBorra;
