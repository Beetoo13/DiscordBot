const Discord = require("discord.js");

const stoleYourWaifu = (msg) => {
  if (msg.content.toLowerCase() === "-stoleyourwaifu") return;

  const attachment = new Discord.MessageAttachment(
    "https://media1.tenor.com/images/d782b8861f75b537e364e66e4282ca42/tenor.gif?itemid=20293730"
  );

  msg.channel.send(attachment);
};

module.exports = stoleYourWaifu;
