const Discord = require("discord.js");
const client = new Discord.Client();
const ratapuke = require("./commands/gifs/Ratapuke");
const yaTeVimos = require("./commands/imgs/Yatevimos");
const booba = require("./commands/gifs/Booba");
const who = require("./commands/gifs/Who");
const dance = require("./commands/gifs/Dance");
const tantacaca = require("./commands/imgs/TantaCaca");
const nohayamigos = require("./commands/imgs/NoHayAmigos");
const mueregaby = require("./commands/imgs/MuereGaby");
const prime = require("./commands/replies/Prime");
const avatar = require("./commands/replies/Avatar");
const commands = require("./commands/replies/Commands");
const hola = require("./commands/replies/Hola");

require("dotenv").config();

client.on("ready", () => {
  client.user.setUsername("Jarvis región 4");
  client.user.setActivity("Atender huercos");

  // Bog logged in
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);
});

client.on("message", (msg) => {
  ratapuke(msg);
  yaTeVimos(msg);
  booba(msg);
  who(msg);
  dance(msg);
  tantacaca(msg);
  nohayamigos(msg);
  mueregaby(msg);
  prime(msg);
  avatar(msg);
  commands(msg);
  hola(msg);
});

client.login(process.env.BOT_TOKEN);
