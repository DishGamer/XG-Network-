const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'links',
    description: 'check the bots links',
    
    run: async (client, interaction, args) => {
        
        const links = new MessageEmbed()
    .setTitle('Bot Owner Links')
    .setDescription('Thank you for checking my links! here is all of my support links! make sure you joined our support server if you want to something')
    .addField('Support Server', '[Click Me](https://discord.gg/EnXYXA2q3s)')
    .addField('Invite me','[Invite me](https://discord.gg/EnXYXA2q3s)')
    .addField('Website',  '[Visit My Website](https://discord.gg/EnXYXA2q3s)')
    .addField('Top.gg', '[Click Me](https://discord.gg/EnXYXA2q3s)')
    .addField('discordbotlist', '[Click me](https://discord.gg/EnXYXA2q3s)')
    .setThumbnail(client.user.displayAvatarURL({dynamic: true}))
    .setColor('#FF0000')
    .setFooter('🔗 Developed By | ENTER YOUR NAME HERE');
        
         interaction.followUp({ embeds: [links] });
    }
}