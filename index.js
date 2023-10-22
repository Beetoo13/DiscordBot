const fs = require("fs");
const path = require("path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Settings for slash commands
client.commands = new Collection();
const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

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
const downloadVideo = require("./commands/otherStuff/VideoToMp3");
const badBony = require("./commands/otherStuff/BadBony");
const facilitoTutorial = require("./commands/otherStuff/FacilitoTutorial");

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
  downloadVideo(msg);
  badBony(msg);
  facilitoTutorial(msg);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(`interaction: ${interaction}`);

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});

client.login(process.env.BOT_TOKEN);
