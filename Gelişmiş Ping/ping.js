const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json');


module.exports.run = async (client, message , args ) => { 




if(message.author.bot) return ;

let prefix = ayarlar.prefix

if (!message.content.startsWith(prefix)) return ;

const ping = await message.channel.send("Hesaplanıyor")


ping.edit("Hesapladım")

const embed = new Discord.MessageEmbed()
.setTitle(" Gecikme Değerim ")
.setColor("d13d3d")
.addField(`Benim gecikme değerim` ,` ${client.ws.ping}`)
.setTimestamp()
.setFooter(`${message.author.tag} ` , message.author.displayAvatarURL());

message.channel.send(embed) 


}

exports.conf = {

aliases: [],
permLevel: 0,

};

exports.help = {

name : "ping",
Description: "Pingi Atar",
usage : "ping"
};

