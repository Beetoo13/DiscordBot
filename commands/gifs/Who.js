const Discord = require("discord.js");

const who = (msg) => {
  if (msg.content.toLowerCase() === "-who") {
    const attachment = new Discord.MessageAttachment(
      "https://media.giphy.com/media/cRNbYm7jLOjm9H8wcP/giphy.gif"
    );

    msg.channel.send(attachment);
  }
};

module.exports = who;
