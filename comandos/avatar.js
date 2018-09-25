const Discord = require('discord.js');

exports.run = (client, message, arg) => {
    let user   = message.mentions.users.first() || message.author,
        avatar = user.displayAvatarURL,
        embed  = new Discord.RichEmbed()
            .setDescription(' **:frame_photo:  Avatar de ' + user + `** \n **[Download](${avatar})**`)
            .setImage(avatar)
            .setColor(0x4cc96a);
    message.channel.send({embed: embed});
}