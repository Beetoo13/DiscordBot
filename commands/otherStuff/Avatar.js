const avatar = (msg) => {
  if (msg.content.toLowerCase().startsWith("-avatar")) {
    if (msg.mentions.users.first() == undefined) {
      msg.reply("necesitas taggear a alguien para revisar su avatar");
      return;
    }

    const taggedUser = msg.mentions.users.first();

    msg.reply(taggedUser.displayAvatarURL());
  }
};

module.exports = avatar;
