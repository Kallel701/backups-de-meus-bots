exports.run = (client, message, args) => {
    if (message.author.id !== '356634817544323084') return message.reply(':x: Sem permissão!');
        try {
          const code = args.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
    
          message.channel.send(evaled, {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERRO\` \`\`\`xl\n${err}\n\`\`\``);
        }
      }