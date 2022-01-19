const fs = require("fs");
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const yt = require("yt-converter");

const downloadVideo = (msg) => {
  const dlVideo = (url) => {
    getVideoName(url);
  };

  const getVideoName = async (url) => {
    await yt
      .getInfo(url)
      .then((result) => {
        msg.channel.send("Obteniendo información del video...");
        setTimeout(() => {
          getVideo(url, result.title, result.lengthSeconds);
        }, 1000);
      })
      .catch((err) => {
        console.log("Error getting the video info: ", err);
      });
  };

  const getVideo = (url, name, length) => {
    let video = ytdl(url, {
      filter: "audioonly",
    }).pipe(fs.createWriteStream(`${name}.mp3`));

    msg.channel.send(
      "Descargando video y convirtiendo a mp3, esto puede tomar tiempo dependiendo de la longitud del video..."
    );

    video.on("finish", () => {
      console.log("FINALLY DOWNLOADEEEEED");
      sendAudio(name);
    });
  };

  const sendAudio = (name) => {
    setTimeout(() => {
      msg.channel
        .send(new Discord.MessageAttachment(`./${name}.mp3`, `${name}.mp3`))
        .then(() => {
          // Delete the file from the server
          fs.unlink(`./${name}.mp3`, (err) => {
            if (err) throw err;
          });
        })
        .catch((error) => {
          if (error.message === "Request entity too large") {
            msg.channel.send(
              "El vídeo se descargó bien pero Discord no me permite enviar archivos mayores a 8mb, así que no puedo envíar ese archivo, lo siento 😔"
            );
            return;
          }
          msg.channel.send(
            "Hubo un error procesando el video, intentalo de nuevo o usa otro link de youtube"
          );
          console.log("error: ", error);
        });
    }, 5000);
  };

  if (msg.content.startsWith("-dlvideo")) {
    const prefix = "-dlvideo";
    const args = msg.content.slice(prefix.length).trim().split(" ");
    const url = args[0];
    if (url.length < 20) {
      msg.channel.send(
        "Necesitas adjuntar un link de youtube al comando separado por un espacio"
      );
      return;
    }
    dlVideo(url);
  }
};

module.exports = downloadVideo;
