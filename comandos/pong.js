const Discord = require("discord.js");

exports.run = (client, message, arg) => {
let ping = Math.floor(message.client.ping); 

if (ping > 300) {
    var embed = new Discord.RichEmbed().setDescription("**Ping! :ping_pong: " + ping + "ms.**")
    .setColor(0xf62c2c)
    message.channel.sendEmbed(embed);
    

} else if (ping > 150) {
    var embed = new Discord.RichEmbed().setDescription("**Ping! :ping_pong: " + ping + "ms.**")
    .setColor(0xd8f725)
    message.channel.sendEmbed(embed);


} else {
    var embed = new Discord.RichEmbed().setDescription("**Ping! :ping_pong: " + ping + "ms.**")
    .setColor(0x4cc96a)
    message.channel.sendEmbed(embed);

};
}