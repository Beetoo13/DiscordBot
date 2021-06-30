const hola = (msg) => {
  if (msg.content.toLowerCase() === "-hola") {
    msg.reply("Holiwi uwu");
  }
};

module.exports = hola;
