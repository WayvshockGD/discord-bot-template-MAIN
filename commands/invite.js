const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  message.reply('INVITE LINK HERE')
}

module.exports.config = {
  name: "invite",
  description: "answers with the invite link",
  usage: "-invite",
  accessableby: "Members",
  aliases: ["invite"]
}
