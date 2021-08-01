const Discord = require("discord.js");
const client = new Discord.Client();

// Gifs
const ratapuke = require("./commands/gifs/Ratapuke");
const booba = require("./commands/gifs/Booba");
const who = require("./commands/gifs/Who");
const dance = require("./commands/gifs/Dance");
const tyler1 = require("./commands/gifs/Tyler1");
const wonNothing = require("./commands/gifs/wonNothing");
const stoleYourWaifu = require("./commands/gifs/stoleYourWaifu");
const cantClaim = require("./commands/gifs/cantClaim");
const anyRollers = require("./commands/gifs/anyRollers");

// Images
const yaTeVimos = require("./commands/imgs/Yatevimos");
const tantaCaca = require("./commands/imgs/TantaCaca");
const noHayAmigos = require("./commands/imgs/NoHayAmigos");
const muereGaby = require("./commands/imgs/MuereGaby");
const buenDato = require("./commands/imgs/BuenDato");
const llevalaALaLuna = require("./commands/imgs/LlevalaALaLuna");
const porFavorAmigo = require("./commands/imgs/PorFavorAmigo");

// Replies
const prime = require("./commands/replies/Prime");
const avatar = require("./commands/replies/Avatar");
const commands = require("./commands/replies/Commands");
const hola = require("./commands/replies/Hola");

require("dotenv").config();

client.on("ready", () => {
  client.user.setUsername("Hifumi");
  client.user.setActivity("-commands", { type: "LISTENING" });

  // Bog logged in
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);
});

client.on("message", (msg) => {
  // Gifs
  ratapuke(msg);
  booba(msg);
  who(msg);
  dance(msg);
  tyler1(msg);
  wonNothing(msg);
  stoleYourWaifu(msg);
  cantClaim(msg);
  anyRollers(msg);

  // Images
  yaTeVimos(msg);
  tantaCaca(msg);
  noHayAmigos(msg);
  muereGaby(msg);
  buenDato(msg);
  llevalaALaLuna(msg);
  porFavorAmigo(msg);

  // Replies
  prime(msg);
  avatar(msg);
  commands(msg);
  hola(msg);
});

client.login(process.env.BOT_TOKEN);
