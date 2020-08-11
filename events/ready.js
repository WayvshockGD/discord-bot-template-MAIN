const Discord = require("discord.js")

module.exports = bot => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Made By: Vipgabe09267#4386's bot builder", { type: "" });
}