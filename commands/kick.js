const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
module.exports.run = async ( client, message, args) => {
    let user = message.mentions.members.first();
    if (message.author.id === client.user.id) return;
    if (message.author.bot) return;
    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`**${message.author.tag}** you cant kick people.`).then(m => m.delete({timeout: 10000}));;
    if (user.id === message.member.id) return message.channel.send(`You can't kick your self`).then(m => m.delete({timeout: 10000}));
    if (!user) return message.channel.send(`Can't find that member`).then(m => m.delete({timeout: 10000}));
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`I dont have permisson to do that...`).then(m => m.delete({timeout: 10000}));
    if (!user.kickable) return message.channel.send(`Can't kick that user, make sure my role is higher then theirs`).then(m => m.delete({timeout: 10000}));
    user.kick()
    message.channel.send(`**${user}** has been kicked by ${message.author.tag}`)
}
module.exports.config = {
    name: "Kick",
    description: "kicks a Users",
    usage: "kick",
    accessableby: "Moderators/Admins",
    aliases: []
}