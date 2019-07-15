const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("600375887103524885")
setInterval(function() {
channel.send(`Khaled big`);
}, 30)
})

client.login(process.env.BOT_TOKEN);