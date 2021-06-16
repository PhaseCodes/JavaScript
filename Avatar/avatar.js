const Discord = require('discord.js')

exports.run = async (client, message, args)=> {
let napim = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!napim){
    userid = message.author.id;
  }else{
    userid = napim.id;
  }
}else{
  userid = args[0];
}
try{
let user = await client.users.fetch(userid);


let embed = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
message.channel.send(embed)


}catch{
  message.channel.send("Kullanıcı Bulunamadı")
  return;
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: '',
  usage: 'avatar [@kullanıcı]'
};