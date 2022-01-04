const Discord = require("discord.js");

const yaTeVimos = (msg) => {
  if (msg.content.toLowerCase() === "-yatevimos") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/iJxiHlW.jpg"
    );

    msg.channel.send(attachment);
  }
};

module.exports = yaTeVimos;
