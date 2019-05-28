/*
    Filename: spambot.js
    Author: Zach "valrym" or @ven#5099 on discord
    Date: ??/??/17
    Purpose: send array of members split via newline to ping individuals
*/

  const Discord    =      require("discord.js");
  const bot        =      new Discord.Client({fetch_all_members: true});
  const message    = "@.everyone"

  bot.on('message', msg => {
      if(msg.cleanContent != message && msg.author.id != bot.user.id) return;
        try {
          var m = msg.channel.send(msg.channel.guild.members.array(),{split: 1});
        }
    catch(error){console.log(error);
	}});

bot.on('ready', () => {
	console.log("loaded\n");
}
);
 bot.login("token");
