const Discord = require('discord.js');
require("dotenv").config();
var cockamount;
var meowamount;

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
            // !cock command
    if (message.content == "!cock") {
        message.reply("Cock counter: " + cockamount);
        console.log("ran command !cock with cockamount = " + cockamount);
        cockamount -= 1;
    }
    if (message.content.includes("cock")) {
        cockamount += 1;
        console.log("cock was said, cockamount = " + cockamount);
    }

            // !meow command
    if (message.content == "!meow") {
        message.reply("Meow counter: " + meowamount);
        console.log("ran command !meow with meowamount = " + meowamount);
        meowamount -= 1;
    }
    if (message.content.includes("meow")) {
        meowamount += 1;
        console.log("Meow was said, meow amount = " + meowamount);
    }

            // !uwu command
    if (message.content == "!uwu") {
        var uwuran = getRandomInt(45).toString();
        if (uwuran == 0) {
            message.reply("femboys awe the futuwe of ouw genyewation uwu, they awe cute, giwwy and wuvs putting things up theiw wittwe swutty boipussy, they awe the pewfect giwwfwiends owo and they wiww wuv you fowevew and evew so they nyuzzwes with you O//W//O wooks at daddy c-can I be youw sexy femboy so you can use me as a c-cummies wag pweaseeeee?");
        }
        if (uwuran == 1) {
            message.reply("u-uuuwaaaa~ OmO i-i let my boifwendu do a cummy cum in my boipucccwie~!!! and he didn't wear a boicondom O////O a-a-am i gonna get boipreggers now?? 3: i is too young to be a boimother! >///< c-c-can i getsies a boibortion? uwu c-can i pay my boinecologist with my boipucccwie-wucie? O////< p-perhaps i could offer him my tasty boimilk uwu. o-or m-maybe i'll ask if he will accept a pint of my sticky boisyrup instead UwU");
        }
        if (uwuran == 2) {
            message.reply("Ok so I'm not gay but I'm Swedish and have a fantasy where Germany win world war two and Sweden needs to export aryan twink boipussy slaves to high ranking SS officers for pleasure. I imagine I'm a shy little blonde twink with smooth pale skin and being brought into komedant heinrichs bedroom to give him pleasure. He is a tall broad shoulders kraut with a jawline that could cut a diamond and with massive daddy muscles and I'm a pathetic skinny little boipussy twink. He pulls me into his arms force kissing me and pressing my chest against his. He pins me down on the bed tearing my cute lil virgin panties off, he has waited for this for a long time. He teases my boipussy with his massive thicc German cock and then he goes all in. Fucking me with a force I've never felt before. Every thrust makes him moan with pleasure. I love the fact I give him pleasure. He cums deep into my sissy swede guts, breeding my booty hole then he cuddles me with his strong masculine German arms until I fall asleep on his chest. Any other straight guys have similar fantasies?");
        }
        if (uwuran == 3) {
            message.reply("Rawr X3 *nuzzles* How are you? *pounces on you* you're so warm o3o *notices you have a bulge* someone's happy! *nuzzles your necky wecky* ~murr~ hehe ;) *rubbies your bulgy wolgy* you're so big! *rubbies more on your bulgy wolgy* it doesn't stop growing .///. *kisses you and licks your neck* daddy likes ;) *nuzzle wuzzle* I hope daddy likes *wiggles butt and squirms* I wanna see your big daddy meat! *wiggles butt* I have a little itch o3o *wags tails* can you please get my itch? *put paws on your chest* nyea~ it's a seven inch itch *rubs your chest* can you pwease? *squirms* pwetty pwease? :( I need to be punished *runs paws down your chest and bites lip* like, I need to be punished really good *paws on your bulge as I lick my lips* I'm getting thirsty. I could go for some milk *unbuttons your pants as my eyes glow* you smell so musky ;) *licks shaft* mmmmmmmmmmmmmmmmmmm so musky ;) *drools all over your cawk* your daddy meat. I like. Mister fuzzy balls. *puts snout on balls and inhales deeply* oh my gawd. I'm so hard *rubbies your bulgy wolgy* *licks balls* punish me daddy nyea~ *squirms more and wiggles butt* I9/11 lovewas an yourinside muskyjob goodness *bites lip* please punish me *licks lips* nyea~ *suckles on your tip* so good *licks pre off your cock* salty goodness~ *eyes roll back and goes balls deep*");
        }
        if (uwuran == 4) {
            message.reply("Great. I fucking cummed. Because of what you posted. Do you think it's cool to make me cum in front of my family? Do you get joy out of it? My cum filled my underwear and is dripping down my leg. All because of you. I'm at my wife's funeral right now and I cummed all over her coffin. My great grandpa looked at this post and cummed so hard he died! Now I have to got to two funerals, all because of you. My great grandma slapped me in the face, which made me cum even more! I'm sitting in a pool of my own cum with two dead people in this room, just because you had to post this.")
        }
    }
});

client.login(process.env.TOKEN);
