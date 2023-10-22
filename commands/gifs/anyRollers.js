const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("any rollers")
    .setDescription("Any rollers in the chat"),
  async execute(interaction) {
    await interaction.reply({
      files: [
        "https://media1.tenor.com/images/5ddb986e908c642b656d1680b4cc7b43/tenor.gif?itemid=21273478",
      ],
    });
  },
};
