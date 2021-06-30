const commands = (msg) => {
  if (msg.content.toLowerCase() === "-commands") {
    msg.reply(`
        Estos son los comandos disponibles:
            Gifs:
                **-ratapuke**, despliega el buenisisisimo gif del remy vomitandose
                **-booba**, booba gif
                **-who**, who gif
                **-dance**, Itadori gif
            Imagenes:
                **-yatevimos**, imagen de ya te vimos (simpsons)
                **-mueregaby**, MUERTEE A GABYYYY
                **-nohayamigos**, no hay amigos solo conocidos... 
                **-tantacaca**, nunca había visto tanta caca junta 
            Respuestas:
                **-avatar <@user>**, despliega el avatar del usuario mencionado
                **-prime <@user>**, le dedica un buen prime al usuario mencionado
                **-hola**, holiwi uwu
        `);
  }
};

module.exports = commands;
