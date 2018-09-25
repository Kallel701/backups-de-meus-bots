exports.run = (client, message, args) => {    
    message.react('✅')
    const dono = "356634817544323084"

    let reason = args.slice(0).join(' ');

    if (message.author.id !== dono) return message.reply({embed: {
        color: 0xf53a3a,
        description: ` **Você não pode usar esse comando.**
         ` 
        
        },  
    });
    if (reason.length < 1) return message.reply({embed: {
        color: 0xf53a3a,
        description: ` **Diga o comando que devo reiniciar!**
         ` 
        
        },  
    });

    delete require.cache[require.resolve(`./${args[0]}.js`)];

    message.channel.sendMessage({embed: {
        color: 0x4cc96a,
        description: ` **:gear: Comando reiniciado!**
         ` 
        
        },  
    })

};