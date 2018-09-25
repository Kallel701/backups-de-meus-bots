const Discord = require("discord.js");

exports.run = (client, message, args) => {    
    message.react('✅')
    var embed = new Discord.RichEmbed()
    .addField('Me adicionar:', `[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=392091797397962753&scope=bot&permissions=8)`)
    .addField('Meu servidor:', `[Clique aqui](https://discord.gg/c3acAmk)`)
    .setFooter('(Glyph™, todos os direitos reservados)')
message.author.send({
    embed: embed
}); 
}