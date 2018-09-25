exports.run = (client, message, args)  => {
const config = require('../config.json');
const Discord = require('discord.js');
const Client = new Discord.Client();
const user = message.mentions.users.first();
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**Você não tem permissão para dar purge/clear no chat!**");
if (!amount) return message.reply('Coloque um número para ser apagado! (Concidere a mensagem do comando!)');
if (!amount && !user) return message.reply('Deve especificar um usuário e quantidade, ou apenas uma quantidade, de mensagens para dar purge!');
message.delete()
message.channel.fetchMessages({
 limit: amount,
}).then((messages) => {
 if (user) {
 
   const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
})
}