# spambot.js - a discord.js mini project
- a simple, compact @everyone bypass for discord.js users (24 lines without reformatting, can be cut to 13)
- only uses 3 consts to cut down on memory usage and overall lines of code
```
  const Discord    =      require("discord.js");
  const bot        =      new Discord.Client({fetch_all_members: true});
  const message    = "@.everyone" <-- customizable start message
```
- simply put in an alternative accounts token and either customize your message or say @.everyone to begin an attack
```
 bot.login("token"); <-- replace this with your alternate account's token
```

selfbots are NOT permitted under discord TOS, and in no way am i liable for damage of property or damage of accounts under the MIT license

[zach's mad lab](discord.gg/YNemAAq)
