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
const conQuienHablas = require("./commands/imgs/ConQuienHablas");
const paQueLoBorra = require("./commands/imgs/PaQueLoBorra");
const lloriquin = require("./commands/imgs/Lloriquin");
const agarrameWe = require("./commands/imgs/AgarrameWe");

// Other stuff
const prime = require("./commands/otherStuff/Prime");
const avatar = require("./commands/otherStuff/Avatar");
const commands = require("./commands/otherStuff/Commands");
const hola = require("./commands/otherStuff/Hola");
const dice = require("./commands/otherStuff/Dice");
const bities = require("./commands/otherStuff/Bities");

// Cron Jobs
const holaPerdida = require("./cron jobs/HolaPerdida");
const isToday = require("./cron jobs/Birthdays");
const ferDirectMessage = require("./cron jobs/FerDm");

require("dotenv").config();

client.on("ready", () => {
  client.user.setUsername("Hifumi");
  client.user.setActivity("-commands", { type: "LISTENING" });

  // Bog logged in
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);

  //Set-up cron job methods
  holaPerdida(client);
  isToday(client);
  ferDirectMessage(client);
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
  conQuienHablas(msg);
  paQueLoBorra(msg);
  lloriquin(msg);
  agarrameWe(msg);

  // Other Stuff
  prime(msg);
  avatar(msg);
  commands(msg);
  hola(msg);
  dice(msg);
  bities(msg);
});

client.login(process.env.BOT_TOKEN);
