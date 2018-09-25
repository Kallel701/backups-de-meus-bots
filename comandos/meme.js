const Discord = require('discord.js');
exports.run = (client, message, arg) => {
    message.react('😂')
    var trevo = [
        "https://cdn.discordapp.com/attachments/297732013006389252/393437366989094912/91259d1911b8d9e3d8ee70c1c55f35f8--memes-br-meme-meme.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393438214544687106/382a3ed03342685248911836b807bbff.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393440226649047050/kvbshn.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393440707991568384/tumblr_oqmjdtVrq41s9tymmo1_500.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393440917400584195/680e5bc4feb42749d63af529b02849a6.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393441920598147072/88d143ad-99e4-4252-82d7-da05ad24acab.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393441311564234754/memes-para-nao-ficar-sem-resposta-39.png",
        "https://cdn.discordapp.com/attachments/393429795473588234/393441857419345930/lava.png"
    ];
    var resultado = trevo[Math.floor(Math.random() * trevo.length)]
    let meme = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Meme:')
    .setImage(resultado)
    message.channel.send(meme)
}