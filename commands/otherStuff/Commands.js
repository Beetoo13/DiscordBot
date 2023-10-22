// const { MessageEmbed } = require("discord.js");
// const gifs = require("../../gifs.json");
// const imgs = require("../../images.json");
// const otherStuff = require("../../otherStuff.json");

// const commandsEmbed = new MessageEmbed()
//   .setColor("#0099ff")
//   .setTitle("Hifumi Commands")
//   .setAuthor("Hifumi", "https://i.imgur.com/W0hQgU8.jpg")
//   .setDescription(
//     "Estos son los comandos con los que puedes interactuar conmigo:"
//   )
//   .setThumbnail("https://i.imgur.com/W0hQgU8.jpg")
//   .setImage(
//     "https://64.media.tumblr.com/cdaf1051b646808858887a94fe922abd/tumblr_ocftgkD3li1qg78wpo1_540.gif"
//   )
//   .setFooter("Creado por Beto", "https://i.imgur.com/W0hQgU8.jpg");

// const gifCommands = () => {
//   let textoVacio = "";

//   gifs.commands.forEach((gif) => {
//     textoVacio = textoVacio + `**${gif.nombre}:** ` + `${gif.descripcion} \n`;
//   });

//   commandsEmbed.addField("Gifs", textoVacio);
// };

// const imgCommands = () => {
//   let textoVacio = "";

//   imgs.commands.forEach((img) => {
//     textoVacio = textoVacio + `**${img.nombre}:** ` + `${img.descripcion} \n`;
//   });

//   commandsEmbed.addField("Imagenes", textoVacio);
// };

// const otherStuffCommands = () => {
//   let textoVacio = "";

//   otherStuff.commands.forEach((reply) => {
//     textoVacio =
//       textoVacio + `**${reply.nombre}:** ` + `${reply.descripcion} \n`;
//   });

//   commandsEmbed.addField("Other stuff", textoVacio);
// };

// const commands = (msg) => {
//   if (msg.content.toLowerCase() === "-commands") {
//     gifCommands();
//     imgCommands();
//     otherStuffCommands();
//     msg.channel.send({ embed: commandsEmbed });
//   }
// };

// module.exports = commands;
