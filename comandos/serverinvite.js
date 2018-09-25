exports.run = (client, message, arg) => {
    message.react('✅')
    message.channel.send({embed: {
        color: 0xff0000,
        description: ` **Invite do servidor oficial: [Clique aqui](https://discord.gg/3crTewu)**
         ` 
        
        },  
    })
    }