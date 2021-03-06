const Discord = module.require("discord.js");
const fs = require("fs");

module.exports = {
  name: "servericon",
  aliases: ["icon"],
  description: "Grab the server icon!",
  emoji: "⚙️",

  run: async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name)
    .setColor("#FF0000")
    .setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
    .setTimestamp()
    .setFooter(`Requested by : ${message.author.tag} `)

  await message.channel.send({embeds: [embed]});
}
}