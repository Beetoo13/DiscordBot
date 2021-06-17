const Discord = require("discord.js");
const client = new Discord.Client();
const AntiSpam = require("better-discord-antispam");

require("dotenv").config();

client.on("ready", () => {
  client.user.setUsername("Jarvis región 4");

  // Module Configuration Constructor
  AntiSpam(client, {
    limitUntilWarn: 3, // The amount of messages allowed to send within the interval(time) before getting a warn.
    limitUntilMuted: 5, // The amount of messages allowed to send within the interval(time) before getting a muted.
    interval: 2000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
    warningMessage: "bajele al spam o le va a caer la blindada mijo", // Message you get when you are warned!
    muteMessage: "te wa mutear porque no entiendes alv", // Message sent after member X was punished(muted).
    maxDuplicatesWarning: 7, // When people are spamming the same message, this will trigger when member X sent over 7+ messages.
    maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
    ignoredRoles: ["Admin"], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
    ignoredMembers: [""], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
    mutedRole: "muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
    timeMuted: 1000 * 10, // (Seconds * number) This is how much time member X will be muted. if not set, default would be 10 min.
    logChannel: "antispam-logs", // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
  });

  // Rest of your code
  console.log(`Bot is ready, logged in as: ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase() === "-ratapuke") {
    const attachment = new Discord.MessageAttachment(
      "https://media.giphy.com/media/8GS3ZjTYif8qI/source.gif"
    );

    msg.channel.send(attachment);
  }
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase().startsWith("-prime")) {
    if (msg.mentions.users.first() == undefined) {
      msg.reply("necesitas taggear a alguien para dedicarle un prime");
      return;
    }

    const taggedUser = msg.mentions.users.first();

    msg.channel.send(`${taggedUser}, me das lastima prime...`);
  }
});

client.on("message", (msg) => {
  // If the message is "what is my avatar"
  if (msg.content.toLowerCase().startsWith("-avatar")) {
    if (msg.mentions.users.first() == undefined) {
      msg.reply("necesitas taggear a alguien para revisar su avatar");
      return;
    }

    const taggedUser = msg.mentions.users.first();

    msg.reply(taggedUser.displayAvatarURL());
  }
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase().startsWith("-commands")) {
    msg.reply(`Estos son los comandos disponibles por ahora:
    **-ratapuke**, despliega el buenisisisimo gif de ratatouille
    **-avatar <@user>**, despliega la imagen del usuario mencionado
    **-prime <@user>**, le dedica un buen prime al usuario mencionado
    `);
  }
});

client.on("message", (msg) => {
  if (msg.content.toLowerCase().startsWith("-hola")) {
    msg.reply("Holiwi uwu");
  }
});

client.on("message", (msg) => {
  if (
    msg.content.toLowerCase().startsWith("-ratapuke") ||
    msg.content.toLowerCase().startsWith("-prime") ||
    msg.content.toLowerCase().startsWith("-avatar")
  ) {
    client.emit("checkMessage", msg);
  }
});

client.login(process.env.BOT_TOKEN);
