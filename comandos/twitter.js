exports.run = (client, message, arg) => {
    message.react('✅')
    message.channel.send({embed: {
        color: 0x4cc96a,
        description: ` **Nosso Twitter: [Clique aqui!](https://twitter.com/GlyphTm)**
         ` 
        
        },  
    })
    }