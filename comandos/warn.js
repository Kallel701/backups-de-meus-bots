exports.run = (client, message, args) => {   
var user = message.mentions.users.first();
var member = message.guild.member(user)
var reason = message.content.split(' ').slice(2).join(' ');
let role = message.member.hasPermission('KICK_MEMBERS');
if (!message.member.hasPermission('KICK_MEMBERS'))
return message.reply(`**Você não é um Moderador.**`);
if (!user)
return message.reply('**Mencione alguém para avisar!**');
if (!reason)
return message.channel.send(`**Use g!warn [@Membro] [Razão]**`)
message.delete()

user.send(`Você foi avisado por **${message.author.tag}**.
**Motivo:** ${reason}.`)
message.channel.send(`**Esse membro foi avisado.**`);

};