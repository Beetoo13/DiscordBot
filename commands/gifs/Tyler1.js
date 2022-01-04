const Discord = require("discord.js");

const tyler1 = (msg) => {
  if (msg.content.toLowerCase() === "-tyler1") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/p3d3R7G.gif"
  );

  msg.channel.send(attachment);
};

module.exports = tyler1;
