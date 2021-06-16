const Discord = require('discord.js');//'TheGhost#0602
var generator = require('generate-password');
const ayarlar = require('../ayarlar.json') 

exports.run = function(client, message, args) {

  
    let uzunluk = args[0]
    let prefix = ayarlar.prefix
   
    if (!prefix) return message.reply(`**Doğru Kullanımı** ${prefix}şifre <uzunluk> `)
  
    if(!uzunluk) return message.channel.send(`**Doğru Kullanımı** ${prefix}şifre <uzunluk>`);

        var password = generator.generate({//'TheGhost#0602
        length: `${uzunluk}` , 
        numbers: true
    });
    
    let embed = new Discord.MessageEmbed()
    .setTitle(":closed_lock_with_key: Üretilen Şifre :closed_lock_with_key: ")
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription(`Şifre: **${password}**`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
  
    message.channel.send(embed);
  }


  exports.conf = {//'TheGhost#0602
    enabled: true, 
    guildOnly: true, 
    aliases: [],
    permLevel: 0 
  };
  
  exports.help = {
    name: 'şifre', 
    description: 'Rastgele bir şifre oluşturur.',
    usage: 'şifre <uzunluk>'
  };