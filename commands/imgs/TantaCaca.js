const Discord = require("discord.js");

const tantaCaca = (msg) => {
  if (msg.content.toLowerCase() === "-tantacaca") return;

  const attachment = new Discord.MessageAttachment(
    "https://i.imgur.com/Vm2X1hN.jpg"
  );

  msg.channel.send(attachment);
};

module.exports = tantaCaca;
