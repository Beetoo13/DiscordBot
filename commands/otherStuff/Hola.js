const hola = (msg) => {
  if (msg.content.toLowerCase() === "-hola") return;

  msg.reply("Holiwi uwu");
};

module.exports = hola;
