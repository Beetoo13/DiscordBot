const Discord = require("discord.js");

const conQuienHablas = (msg) => {
  if (msg.content.toLowerCase() === "-conquienhablas") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/j7z0bfx.jpg"
    );

    msg.channel.send(attachment);
  }
};

module.exports = conQuienHablas;
