const Discord = require(`discord.js`);
const request = require("request");
const client = new Discord.Client();
let p = ";"

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("**Все команды бота:**")
        .setColor("#000594")
        .setDescription(' **;help** - помощь \n **;say** `сообщение` - сказать от имени бота \n **;sms [user]** `сообщение` - сказать что-то человеку в личные сообщения \n **;ping** - показать ваш пинг \n **;hug [user]** - обнять кого-то \n **;pat [user]** - погладить кого-то \n **;kiss [user]** - поцеловать кого-то \n **;gasm** - отправить картинку оргазма')
        .setFooter("Cosmic ⛧ Player's|Cassiopeia")
        .setTimestamp();
    message.channel.send({embed});
}});


client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + 'say')) {
    let say = message.content.slice((p + 'say').length);
    const embed = new Discord.RichEmbed()
    .setColor("#000594")
    .setDescription(say)
    .setFooter("Cosmic ⛧ Player's|Cassiopeia")
    message.channel.send({embed});
}


if(['sms'].includes(command)) {
    let user = message.mentions.members.first(); 
        if (!user) {
            message.delete
            message.author.send(message.author + ', Ошибка. Причина: **Не указан получатель сообщения**');
            return
        }
        const sendMessage = args.join(" ");
        let msg = user.send('**Вам пришло смс от**'+ message.author + '. \n**Он сказал(а):** ' + sendMessage.replace(user, '')).catch(()=>{message.reply('***Ошибка. Причина: не указано сообщение***');
        })
        message.delete().catch(O_o=>{});
    }

});

client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.startsWith(p + `hug`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/hug', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **обнял(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                       .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if (message.content.startsWith(p + `pat`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/pat', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **погладил(а) по голове** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if (message.content.startsWith(p + `kiss`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/kiss', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **поцеловал(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if (message.content.startsWith(p + `slap`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/slap', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle('>:(')
                        .setDescription(`${user} **ударил(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                       .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if (message.content.startsWith(p + `poke`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/poke', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **тыкнул(а) в** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }


    if (message.content.startsWith(p + `gasm`)) {
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/gasm', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                       .setFooter("Cosmic ⛧ Player's|Cassiopeia"); 
                    msg.edit({embed});
                } catch (e) {
               console.log(e)
                 }
            });
        });
    }

    if(message.content.startsWith(p + 'poll')) {
		message.delete().catch(O_o => {});
		const say_poll_embed = args.join(" ");
		const embed = new Discord.RichEmbed()
			.setColor(`#000594`)
			.setDescription(say_poll_embed)
			.setFooter("Cosmic ⛧ Player's")
			.setTimestamp();	
            message.channel.send({
                embed
            }).then(function(message) {
                message.react("✅")
                message.react("❎")
                message.react("🔘")
            }).catch(function() {});
        }

        if (message.author.bot) return;
        if (message.content.startsWith(p + 'ping')) {
        const embed = new Discord.RichEmbed()
    .setColor("#000594")
    .setDescription('\n **Pong!** `' + `${Date.now() - message.createdTimestamp}` + ' ms` \n')
    .setFooter("Cosmic ⛧ Player's|Cassiopeia")  
    message.channel.send({embed});
    }
    });

    client.on('ready', () => {
        client.user.setPresence({ game: { name: `Cosmic ⛧ Player's | ;help`, type: 3 } }).catch();
    });
