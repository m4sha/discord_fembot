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
    cockamount = 1;
});

client.on("messageCreate", (message) => {
    if (message.content == "!cock") {
        message.reply("Cock has been said " + cockamount + " times :3");
        console.log("ran command !cock with cockamount = " + cockamount);
        cockamount -= 1;
    }
});

client.on("messageCreate", (message) => {
    if (message.content.includes("cock")) {
        cockamount += 1;
        console.log("cock was said, cockamount = " + cockamount);
    }
});

client.login(process.env.TOKEN);
