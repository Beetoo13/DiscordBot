const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("booba")
    .setDescription("booooooooooooba"),
  async execute(interaction) {
    console.log("Testing booba");
    await interaction.reply({
      files: [
        "https://i.kym-cdn.com/photos/images/original/001/940/252/3b6.gif",
      ],
    });
  },
};
