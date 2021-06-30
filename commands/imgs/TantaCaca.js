const Discord = require("discord.js");

const tantacaca = (msg) => {
  if (msg.content.toLowerCase() === "-tantacaca") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/Vm2X1hN.jpg"
    );

    msg.channel.send(attachment);
  }
};

module.exports = tantacaca;
