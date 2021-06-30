const Discord = require("discord.js");

const mueregaby = (msg) => {
  if (msg.content.toLowerCase() === "-mueregaby") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/W5DlJkI.jpg"
    );

    msg.channel.send(attachment);
  }
};

module.exports = mueregaby;
