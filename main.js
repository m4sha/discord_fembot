const Discord = require('discord.js');
require("dotenv").config();

var cockamount = 0;

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "!cock") {
        message.send(`<@${member.id}> I love huge penis`);
    }
})

const welcomeChannelId = "985128570592591952";
client.on("guildMemberAdd", (member) => {
    member.guild.channels.channelCountWithoutThreads.get(welcomeChannelId).send(`<@${member.id}> Hello`)
});

client.login(process.env.TOKEN);
