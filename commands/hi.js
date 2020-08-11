const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    return message.channel.send("Bot Template made by: vipgabe09267")
}

module.exports.config = {
    name: "hi",
    description: "",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi']
}
