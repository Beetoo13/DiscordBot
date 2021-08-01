const commands = (msg) => {
  if (msg.content.toLowerCase() === "-commands") {
    msg.reply(`
        Estos son los comandos disponibles:
            Gifs:
                **-ratapuke**, despliega el buenisisisimo gif del remy vomitandose
                **-booba**, booba gif
                **-who**, who gif
                **-dance**, Itadori gif
                **-anyRollers**, any rollers in the chat?
                **-cantClaim**, k pasó amiguito? No tiene claim?
                **-stoleYourWaifu**, LE ROBARON LA WAIFU AL VATOOO
                **-tyler1**, tyler bien bonito con lentes jiji
                **-wonNothing**, k pasó amiguito? No ganó nada en el casino?
            Imagenes:
                **-yaTeVimos**, imagen de ya te vimos (simpsons)
                **-muereGaby**, MUERTEE A GABYYYY
                **-noHayAmigos**, no hay amigos solo conocidos... 
                **-tantaCaca**, nunca había visto tanta caca junta
                **-buenDato**, buen datoooooooo mi compaaaaaaaaa
                **-llevalaALaLuna**, llevala a la luna por mi 🥺
                **-porFavorAmigo**, por favor amigo te chuparé...
            Respuestas:
                **-avatar <@user>**, despliega el avatar del usuario mencionado
                **-prime <@user>**, le dedica un buen prime al usuario mencionado
                **-hola**, holiwi uwu
        `);
  }
};

module.exports = commands;
