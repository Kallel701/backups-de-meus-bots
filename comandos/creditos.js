const Discord = require("discord.js");

exports.run = (client, message, args) => {    
    var embed = new Discord.RichEmbed()
    .addField('**__Créditos__**', `Tenho que agradecer à todos que me ajudaram e programar, criar, e desenvolver esse bot!`)
    .addField('Doadores', `<@370647801299992580>`)
    .addField('Pessoas que ajudaram', `<@181482690191687680>, <@286144811680137218>, <@244489368717230090>, <@315263840268976128> e <@171264973652099072>
(Muito obrigado! :heart:)`)
message.channel.send({
    embed: embed
}); 
}