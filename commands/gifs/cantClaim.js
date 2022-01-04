const Discord = require("discord.js");

const cantClaim = (msg) => {
  if (msg.content.toLowerCase() === "-cantclaim") {
    const attachment = new Discord.MessageAttachment(
      "https://media1.tenor.com/images/13916d948e2dd9c45b7c0db873e91e34/tenor.gif?itemid=20733714"
    );

    msg.channel.send(attachment);
  }
};

module.exports = cantClaim;
