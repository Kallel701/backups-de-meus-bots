exports.run = (client, message, args)  => {
    let CaptchaRole = message.guild.roles.find("name", "Notificar (>notificar)");
    if(!CaptchaRole) return;
    if(message.member.roles.has(CaptchaRole.id)) {
        message.guild.member(message.author.id).removeRole(CaptchaRole.id)
        message.reply(`**Agora não irá receber as notificações... :frowning:**`)
    
      } else {
         message.guild.member(message.author.id).addRole(CaptchaRole.id).catch(console.error);
         message.reply(`**Agora irá receber as novidades do <@392091797397962753>!**`)
      }
    }