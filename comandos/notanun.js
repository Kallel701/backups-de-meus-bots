exports.run = (client, message, arg) => {
if  (!message.member.hasPermissions(["ADMINISTRATOR"])) return message.reply(":x: **Você não tem Permissão '`ADMINISTRATOR`'.**");
  message.react('✅')
    message.channel.send({embed: {
        color: 0x4cc96a,
        description: ` **Agora esse servidor não receberá mais anúncios do Glyph.**
         ` 
        
        },  
    })
    }