exports.run = (client, message, arg) => {
    message.react('✅')
    var trevo = [
        "Sorte! :smiley:",
        "Azar... :sob:",
        "Você está sem azar! Você virou o melhor cara do mundo! :smiley:",
        "Vish... Você sofreu um acidente de carro, e está no hospital... Azar! :sob:",
        "Você ganhou um monte de dinheiro e virou o bilhonário do século! :money_mouth:",
        "Você perdeu sua casa... Não pagou o imposto... Está com azar! :sob:",
        "Você estava acampando, até que chegou um urso e... Nem preciso continuar por quê você já sabe... :confused: Azar...",
        "Você passou por baixo de uma escada na calçada , depois um piano estava caindo em sua direção , então :confounded:"
    ];
    var resultado = trevo[Math.floor(Math.random() * trevo.length)] // Vai escolher uma das opções que estão na variável trevo aleatoriamente.
    message.channel.send('**Resultado:** ' + resultado) 
}