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
        message.reply("cock!");
    }
})

client.login(process.env.TOKEN);
