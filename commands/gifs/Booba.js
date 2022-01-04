const Discord = require("discord.js");

const booba = (msg) => {
  if (msg.content.toLowerCase() === "-booba") {
    const attachment = new Discord.MessageAttachment(
      "https://i.kym-cdn.com/photos/images/original/001/940/252/3b6.gif"
    );

    msg.channel.send(attachment);
  }
};

module.exports = booba;
