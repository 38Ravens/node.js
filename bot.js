const Discord = require("discord.js")
const config = require("./config.json");
const bot = new Discord.Client({ disableEveryone: true });
bot.on("ready",async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("!help",{type: "WATCHING"}); 
});

bot.login(config.token);
var prefix = "!";

bot.on("message", msg => {

  if (msg.guild === null) return;

  if (msg.author.bot) return;

  if (!msg.member.hasPermission("ADMINISTRATOR")) return;



  if (!msg.content.toLowerCase().startsWith(prefix)) return;

  msg.delete();

  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {

    var mem = msg.mentions.members.first();

    mem.kick().then(() => {

      msg.channel.send(mem.displayName + " has successfully been kicked by " + msg.author.username + "!");

    }).catch(e => {

      msg.channel.send("An error occured!");

    });

  }

  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {

    var mem = msg.mentions.members.first();

    var mc = msg.content.split(" ")[2];

    mem.ban(mc).then(() => {

      msg.channel.send(mem.displayName + " has successfully been banned by " + msg.author.username + " for " + mc + " days!");

    }).catch(e => {

      msg.channel.send("An error occured!");

    });

  }

  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {

    var mem = msg.mentions.members.first();

    if (msg.guild.roles.find("name", "Muted")) {

      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {

        msg.channel.send(mem.displayName + " has successfully been muted!");

      })
            .catch(e => {
                msg.channel.send("An error occured!");
                console.log(e);
            });



    }

  }

  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {

    var mem = msg.mentions.members.first();

    if (msg.guild.roles.find("name", "Muted")) {

      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {

        msg.channel.send(mem.displayName + " has successfully been unmuted!");

      }).catch(e => {

        msg.channel.send("An error occured!");

        console.log(e);

      });



    }

  }

  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {

    var mc = msg.content.split(" ")[1];

    msg.channel.bulkDelete(mc);

  }

  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {

    var sc = msg.content.substring(msg.content.indexOf(" "));

    eval(sc);

  }

  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {

    var ca = msg.content.substring(msg.content.indexOf(" "));

    msg.reply(ca + " is " + eval(ca).toFixed(2));

  }

});


bot.on('message', msg=>{
    if(msg.content === "!hello")
    {
      msg.channel.sendMessage('hello friend!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!help")
    {
        msg.channel.sendMessage('**{our commands are !treat (gives a raven a treat) !hello (a nice greating) !bobereto !38 (38 Ravens youtube) !youtube (boberetos youtube) !twitch (boberetos twitch) !patreon (boberetos patreon page) !maker (who made this bot?) !bobbot !join (join a voice channel for music) !ban !kick !unban !unkick !mute !unmute !leave (leaves a voice channel) !warn}**');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!bobereto")
    {
      msg.channel.sendMessage('Bobereto is the best youtuber ever and if you say he is not then i`ll ban you :(')
    }
})

bot.on('message', msg=>{
    if(msg.content === "!38")
    {
      msg.channel.sendMessage('38 Raven`s youtube is https://www.youtube.com/channel/UCmXJO75VL7NGyLE7TVy2-ww?view_as=subscriber')
    }
})

bot.on('message', msg=>{
    if(msg.content === "!youtube")
    {
      msg.channel.sendMessage('Bobereto`s youtube is https://www.youtube.com/channel/UCffIckbhV9pQEHDiKrgjrGA');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!patreon")
    {
      msg.channel.sendMessage('here is bobereto`s patreon https://www.patreon.com/BoberetoGaming');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!twitch")
    {
      msg.channel.sendMessage('here is bobereto`s twitch https://www.twitch.tv/boberetogaming');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!maker")
    {
      msg.channel.sendMessage('hello my maker is 38Raven`s!!!!!');
    }
})

bot.on('message', msg=>{
    if(msg.content === "!bobbot")
    {
      msg.channel.sendMessage('BEEP BOOP');
    }
})

bot.on('message', msg=>{
  if(msg.content === "!join")
  {
    msg.channel.sendMessage('This command is not up yet');
  }
})

bot.on('message', msg=>{
  if(msg.content === "!leave")
  {
    msg.channel.sendMessage('This command is not up yet');
  }
})

bot.on('message', msg=>{
    if(msg.content === "!warn")
    {
      msg.channel.sendMessage('player have been warned i will keep track of all the warns we dont have a command just yet but we will soon!!!!');
    }
  })

  bot.on('message', msg=>{
    if(msg.content === "!treat")
    {
      msg.channel.sendMessage('*gives @38Ravens a treat*');
    }
  })
