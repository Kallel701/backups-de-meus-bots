const Discord = require("discord.js");

exports.run = (client, message, args) => {    
    message.react('✅')
    message.channel.send('**Verifique seu DMs. :mailbox_with_mail:**')
    let user = message.mentions.users.first() || message.author;
    var embed = new Discord.RichEmbed()
    
    .addField('*__Comandos__*', `
<> - Parâmetros opcional
[] - Parâmetros necessário`)
message.author.send({
    embed: embed
});
   var embed = new Discord.RichEmbed()
    .addField('Administração:', `
g!ban [@Membro] [Razão] - Comando para banir alguém.
g!kick [@Membro] [Razão] - Comando para espulsar alguém.
g!warn [@Membro] [Razão] - Comando para avisar alguém.
g!clear / g!purge <@Membro> [Quantia em números] - Comando para tirar algumas mensagens.`)
message.author.send({
    embed: embed
}); 
  var embed = new Discord.RichEmbed()
    .addField('Utilitários:', `
g!serverinfo - Veja dados do servidor.
g!userinfo - Veja dados do usuário mencionado ou seu.
g!invite - Para você me adicionar no seu servidor.
g!prefix - Veja o meu prefix, em breve poderá altera-lo.
g!avatar - Veja o seu avatar ou do usuário mencionado.
g!ping / g!pong - Meu comando para ver meu ping.
g!email - Nos contate via e-mail.
g!info / g!botinfo - Info do bot.
g!website / g!site - Veja nosso site.
g!twitter - Veja nosso Twitter.
g!creditos - Veja os créditos do bot, como doadores.`)
message.author.send({
    embed: embed
}); 
  var embed = new Discord.RichEmbed()
    .addField('Diversão', `
g!trevo - Veja se está com sorte ou azar.
g!say / g!fale / g!falar <Mensagem> - Faça o bot falar algo.
g!girarmoeda / g!flipcoin - Girar uma moeda, perfeito para apostas com amigos!
g!johnny - Faça o bot enviar uma mensagem de amor.`)
message.author.send({
    embed: embed
}); 
  var embed = new Discord.RichEmbed()
    .addField('Achou algum bug?', `
Reporte no [servidor oficial](https://discord.gg/c3acAmk), mencionando algum dos donos!`)
    .setFooter('Glyph™')
message.author.send({
    embed: embed
}); 
}