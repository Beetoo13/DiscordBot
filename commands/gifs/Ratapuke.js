const Discord = require("discord.js");

const ratapuke = (msg) => {
  if (msg.content.toLowerCase() === "-ratapuke") return;

  const attachment = new Discord.MessageAttachment(
    "https://media.giphy.com/media/8GS3ZjTYif8qI/source.gif"
  );

  return msg.channel.send(attachment);
};

module.exports = ratapuke;
