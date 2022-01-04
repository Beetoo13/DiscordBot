const Discord = require("discord.js");

const buenDato = (msg) => {
  if (msg.content.toLowerCase() === "-buendato") {
    const attachment = new Discord.MessageAttachment(
      "https://i.imgur.com/1lCU4rV.png"
    );

    msg.channel.send(attachment);
  }
};

module.exports = buenDato;
