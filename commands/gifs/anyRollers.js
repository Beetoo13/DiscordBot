const Discord = require("discord.js");

const anyRollers = (msg) => {
  if (msg.content.toLowerCase() !== "-anyrollers") return;

  const attachment = new Discord.MessageAttachment(
    "https://media1.tenor.com/images/5ddb986e908c642b656d1680b4cc7b43/tenor.gif?itemid=21273478"
  );

  msg.channel.send(attachment);
};

module.exports = anyRollers;
