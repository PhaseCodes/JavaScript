const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client()
const {JsonDatabase,YamlDatabase} = require("wio.db");
const db = new JsonDatabase("myDatabase");

exports.run = async (client, message, args) => {

let prefix = ayarlar.prefix

let otoembed = new Discord.MessageEmbed()
.setTitle('Otorol Sistemi')
.addField("Otorol Rol",
    `\n Rol ayarla  **${prefix}otorol rol < rol ID >**\n Rolü Sıfırla: **${prefix}otorol rol-sıfırla** `)
     .addField("Otorol Kanal",
    `\n Kanal ayarla  **${prefix}otorol kanal < kanal etiket >**\n Kanalı Sıfırla: **${prefix}otorol kanal-sıfırla** `)
     .setColor('RANDOM')
     .setTimestamp()
     .setFooter('Phase Bot Otorol')

    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
    if(!args[0]) return message.channel.send(otoembed)
    if(args[0] === 'rol') {
        var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])

         const rolbaşarılı = new Discord.MessageEmbed()
         .setColor("GREEN")
         .setDescription(`<a:ghost_verfiy:841604241974099978> | **Otorol ${rol} olarak ayarlandı** **》** Otorolü sıfırlamak için \`${prefix}otorol rol-sıfırla  \``)
         .setTimestamp()
         .setFooter(message.author.tag, message.author.displayAvatarURL());

        if(!rol) return message.channel.send('Bir Rol ID Gir')
        db.set(`${message.guild.id}_otorol`, rol.id)
        message.channel.send(rolbaşarılı)


    } else if(args[0] == 'rol-sıfırla') {

        const rolsıfırla = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:ghost_verfiy:841604241974099978> | **Otorol Sıfırlandı ** **》** Otorol ayarlamak için \`${prefix}otorol rol <rol ID>  \``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        if(!db.has(`${message.guild.id}_otorol`)) return message.channel.send('Otorol Zaten ayarlı değil :D'); else {
            db.delete(`${message.guild.id}_otorol`)
            message.channel.send(rolsıfırla)
        }
    } else if(args[0] === 'kanal') {

        const kanalbaşarılı = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:ghost_verfiy:841604241974099978> | **Otorol Kanal ${kanal} olarak ayarlandı** **》** Kanalı sıfırlamak için \`${prefix}otorol kanal-sıfırla  \``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL())

        var kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send('Bir Kanal Etiketle'); else {
            db.set(`${message.guild.id}_otokanal`, kanal.id)
            message.channel.send(kanalbaşarılı)
        }
    } else if(args[0] === 'kanal-sıfırla') {

        const kanalsıfırla = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`<a:ghost_verfiy:841604241974099978> | **Otorol Kanal Sıfırlandı ** **》** Otorol Kanal ayarlamak için \`${prefix}otorol kanal <kanal etiket>  \``)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL())


        if(!db.has(`${message.guild.id}_otokanal`)) return message.channel.send('Zayen otorol kanal ayarlanmamış'); else {
            db.delete(`${message.guild.id}_otokanal`)
            message.channel.send(kanalsıfırla)
        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permlevel: 1
}
exports.help = {
    name: "otorol"
}