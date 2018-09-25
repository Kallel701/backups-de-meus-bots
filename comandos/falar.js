exports.run = (client, message, args) => {    
const prefix = "g!"

  if (message.author.bot) return message.reply("**Bots não podem usar esse comando!**")
if  (!message.member.hasPermissions(["MANAGE_MESSAGES"])) return message.reply(":x: **Você não tem Permissão '`MANAGE_MESSAGES`'.**");
let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('Você precisa inserir o texto que o bot irá dizer');
  message.delete()
  message.channel.startTyping();
  setTimeout(function() {
  message.channel.sendMessage(message.content.replace(`${prefix}falar `,""));
  message.channel.stopTyping();
  }, 3000)};