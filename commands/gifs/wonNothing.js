const Discord = require("discord.js");

const wonNothing = (msg) => {
  if (msg.content.toLowerCase() === "-wonnothing") return;

  const attachment = new Discord.MessageAttachment(
    "https://media1.tenor.com/images/9e3c3bd815e286c33f0cc6dda316fb3c/tenor.gif?itemid=21582410"
  );

  msg.channel.send(attachment);
};

module.exports = wonNothing;
