const Discord = require('discord.js')
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "!cock") {
        message.reply("I love penis! ^~^")
        console.log("i love penis trollfac")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "hi fembot") {
        message.reply("Hello!! :3")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "fuck you fembot") {
        message.reply("you should kill yoursel")
    }
})

const welcomeChannelId = "985128570592591952"

client.on("guildMemberAdd", async (member) => {
    const image = await generateImage(member)
    member.guild.channels.channelCountWithoutThreads.get(welcomeChannelId).send({
        content: `<@${member.id}> Hello`,
        files: [img]
    })
})

client.login(process.env.TOKEN)
