const facilitoTutorial = (msg) => {
  if (msg.content.toLowerCase() === "-facilitotutorial") {
    const attachment = `Ø━━━━━-╮
      ╰┃ ┣▇━▇
      ┃ ┃  ╰━▅╮
      ╰┳╯ ╰━━┳╯F A S I L I T O
      ╰╮ ┳━━╯ E L T U T O R I A L
      ▕▔▋ ╰╮╭━╮
      ╱▔╲▋╰━┻┻╮╲╱▔▔▔╲
      ▏  ▔▔▔▔▔▔▔  O O┃
      ╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱
      ▏╳▕▇▇▕ ▏╳▕▇▇▕
      ╲▂╱╲▂╱ ╲▂╱╲▂╱`;
    msg.channel.send(attachment);
  }
};

module.exports = facilitoTutorial;
