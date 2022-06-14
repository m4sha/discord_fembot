const Discord = require('discord.js');
require("dotenv").config();
var cockamount;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    cockamount = 0;
    meowamount = 0;
});

client.on("messageCreate", (message) => {
    if (message.content == "!cock") {
        message.reply("Cock counter: " + cockamount);
        console.log("ran command !cock with cockamount = " + cockamount);
        cockamount -= 1;
    }
    if (message.content.includes("cock")) {
        cockamount += 1;
        console.log("cock was said, cockamount = " + cockamount);
    }

    if (message.content == "!meow") {
        message.reply("Meow counter: " + meowamount);
        console.log("ran command !meow with meowamount = " + meowamount);
        meowamount -= 1;
    }
    if (message.content.toLowerCase().includes("meow")) {
        meowamount += 1;
        console.log("Meow was said, meow amount = " + meowamount);
    }
});

client.login(process.env.TOKEN);
