exports.run = (client, message, arg) => {
    message.react('✅')
    var trevo = [
        "Cara! (Way!) :boy:",
        "Coroa! (Crown!) :crown:"
    ];
    var resultado = trevo[Math.floor(Math.random() * trevo.length)] // Vai escolher uma das opções que estão na variável trevo aleatoriamente.
    message.channel.send(resultado) 
}