const Discord = require("discord.js");

const porFavorAmigo = (msg) => {
  if (msg.content.toLowerCase() === "-porfavoramigo") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/DTquZwg.jpg"
    );

    msg.channel.send(attachment);
  }
};

module.exports = porFavorAmigo;
