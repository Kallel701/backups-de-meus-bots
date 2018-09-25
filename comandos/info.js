const Discord = require("discord.js");

exports.run = (client, message, args) => {    
    var embed = new Discord.RichEmbed()
    .setTitle('Info')
    .addField('Donos', `[<@356634817544323084> Programação do BOT] [<@470691663799648266> Programador]`)
    .addField('Ajudantes', `Null`)
    .addField('Data de Criação', `24/11/2017`)
    .addField('Me adicionar', `[Clique aqui](https://discordapp.com/oauth2/authorize?client_id=392091797397962753&scope=bot&permissions=8)`)
    .addField('Servidor oficial', `[Clique aqui](https://discord.gg/c3acAmk)`)
    .addField('Twitter', `[Clique aqui](https://twitter.com/GlyphTm)`)
    .addField('Total de servidores', client.guilds.size)
    .addField('Total de Usuários', client.users.size)
    .setFooter('(Glyph™, todos os direitos reservados)')
message.channel.send({
    embed: embed
}); 
}