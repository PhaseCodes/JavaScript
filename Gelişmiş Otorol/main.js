client.on('guildMemberAdd', async (member) => {
    if(db.has(`${member.guild.id}_otorol`)) {
      var idrol = db.fetch(`${member.guild.id}_otorol`)
      member.roles.add(idrol)
    } else {
      return;
    }
    if(db.has(`${member.guild.id}_otokanal`)) {
      var kanal = client.channels.cache.get(db.fetch(`${member.guild.id}_otokanal`))
      let embed = new Discord.MessageEmbed()
      .addField(
        "Rol Verildi <a:ghost_verfiy:841604241974099978> ",
        `\n・ **Yeni Üye**:  ${member}
         \n・ **Verilen Rol**:  <@&${idrol}> rolü verildi 
         `)
      .setTimestamp()
      .setColor('GOLD')
      .setFooter(`Phase Otorol`)
      kanal.send(embed)
    } else {
      return;
    }
  })