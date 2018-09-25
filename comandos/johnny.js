exports.run = (client, message, arg) => {
    message.react('❤')
    var trevo = [
        "**Tentei escrever muitas coisas, mas acabei descobrindo que amar é melhor sentir do que dizer, e que milhões de frases bonitas jamais alcançariam a grandeza do que sinto por você. Resumindo... te amo.**",
        "**Escrevi o teu nome em todas as paredes do meu coração, em letras bem grandes. Assim, se alguém conseguir entrar, vai saber que ele já tem dono.**",
        "**Se eu pudesse viveria minha vida novamente, só para poder encontrar você mais cedo, e assim amar você mais tempo!**",
        "**Não importa se não sou sua primeira história de amor desde que seja eterna, e que de agora em diante seja a única!**"
    ];
    var resultado = trevo[Math.floor(Math.random() * trevo.length)] // Vai escolher uma das opções que estão na variável trevo aleatoriamente.
    message.channel.send(resultado) 
}