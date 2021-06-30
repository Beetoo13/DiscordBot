const prime = (msg) => {
  if (msg.content.toLowerCase().startsWith("-prime")) {
    if (msg.mentions.users.first() == undefined) {
      msg.reply("necesitas taggear a alguien para dedicarle un prime");
      return;
    }

    const taggedUser = msg.mentions.users.first();

    msg.channel.send(`${taggedUser}, me das lastima prime...`);
  }
};

module.exports = prime;
