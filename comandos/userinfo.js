const Discord = require("discord.js");

exports.run = (client, message, args) => {    
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    .setAuthor('Info do Usuário', user.avatarURL)
    .addField(' Nome:', `${user.username}`)
    .addField('ID: ', `${user.id}`)
    .addField('Avatar:', `[Clique aqui](${user.avatarURL})`)
    .addField('Jogando:', `${user.presence.game != null ? user.presence.game.name : "Nada..."}`)
message.channel.send({
    embed: embed
}); 
}