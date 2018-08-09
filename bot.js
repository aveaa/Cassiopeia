const Discord = require(`discord.js`);
const request = require("request");
const client = new Discord.Client();
let p = ";"

//ID ролей
let Oxpana = '477045054045814793'
let Kosmo = '477045398263955456'
let Smotri = '477045398263955456'
let Chmute = '477065648544153600'
let VoiceMute = '477065632546816000'
//тут токен
client.login(process.env.BOT_TOKEN);

//Функции
function randomInteger(min, max) {
    max++
    return Math.floor(Math.random() * (max - min)) + min;
}
function setBigTimeout(func, timeout) {
    if (timeout > 0x7FFFFFFF)
        setTimeout(function() {setBigTimeout(func, timeout-0x7FFFFFFF);}, 0x7FFFFFFF);
    else
        setTimeout(func, timeout);
}
//Команды
client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("**Все команды бота:**")
        .setColor("#000594")
        .setDescription('\n\n **__Основные__** \n\n **;help** - помощь \n **;say** `сообщение` - сказать от имени бота \n **;ping** - показать ваш пинг \n\n **__Развлекательные__** \n\n **;sms [user]** `сообщение` - сказать что-то человеку в личные сообщения \n **;ship [user/текст] [user/текст]** - проверить любовь в процентах \n **;8ball** `сообщение` - ответить боту на ваш вопрос \n\n **__Реакции__** \n\n **;hug [user]** - обнять кого-то \n **;pat [user]** - погладить кого-то \n **;kiss [user]** - поцеловать кого-то \n **;poke [user]** - тыкнуть в кого-то \n **;cuddle [user]** - прижатся к кому-то \n **;tickle [user]** - пощекотать кого-то \n\n **__NSFW__** \n\n **;gasm** - отправить картинку оргазма \n **;hentai** - показать хентай фотку')
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
    
if (['ship'].includes(command)) {
    if (!args[0]) args[0] = message.guild.members.random();
    if (!args[1]) args[1] = message.author
    if (args[0].length > 30 || args[1].length > 30) return message.reply('✖ `Ошибка. Причина:` **Аргумент не может быть длиннее 30 символов**');
    let loveText
    let shkala
    let percents = randomInteger(0, 100)
    if (percents <= 99) {loveText = 'Невероятно!!! :heart_eyes:'; shkala = '■■■■■■■■■□'; }
    if (percents <= 89) {loveText = 'Превосходно! :heartpulse:'; shkala = '■■■■■■■■□□';}
    if (percents <= 79) {loveText = 'Ууу ( ͡° ͜ʖ ͡°)'; shkala = '■■■■■■■□□□';}
    if (percents <= 69) {loveText = 'Дружески :+1:'; shkala = '■■■■■■□□□□';}
    if (percents <= 59) {loveText = 'Неплохо :confused:'; shkala = '■■■■■□□□□□';}
    if (percents <= 49) {loveText = 'Средне :thinking:'; shkala = '■■■■□□□□□□';}
    if (percents <= 49) {loveText = 'Плохо :frowning2:'; shkala = '■■■□□□□□□□';}
    if (percents <= 29) {loveText = 'Очень плохо :disappointed_relieved:'; shkala = '■■□□□□□□□□';}
    if (percents <= 19) {loveText = 'Ужасно :sob:'; shkala = '■□□□□□□□□□';}
    if (percents <= 9) {loveText = 'Хуже некуда :poop:'; shkala = '□□□□□□□□□□';}
    if (percents >= 100) {loveText = 'ИДЕАЛЬНО!!! :heart_exclamation:'; shkala = '■■■■■■■■■■'; percents = 100;}
    const embed = new Discord.RichEmbed()
        .setTitle(":heart:МАТЧМЕЙКИНГ:heart:")
        .setColor("#000594")
        .setDescription('▼***' + args[0] + '***\n▲***' + args[1] + '***\n\n:revolving_hearts:Любовь в проценатах: **' + percents + '%** `[' + shkala + ']`\n:revolving_hearts:' + '\n\nВердикт: **' + loveText + '**')
        .setFooter("Cosmic ⛧ Player's|Cassiopeia")
        .setTimestamp();
    message.channel.send({embed});
}

if (['8ball'].includes(command)) {
    let numOfAnswer = randomInteger(1, 11);
    if (!args[0]) {
        message.reply('Ошибка. Причина: **Не указан аргумент**\n\nПравильное использование:\n=8ball `<вопрос>`'); 
        return;
    }
    if (numOfAnswer === 1) message.reply('Без сомннения!');
    else if (numOfAnswer === 2) message.reply('Да, конечно');
    else if (numOfAnswer === 3) message.reply('Да');
    else if (numOfAnswer === 4) message.reply('В принципе да');
    else if (numOfAnswer === 5) message.reply('Возможно');
    else if (numOfAnswer === 6) message.reply('Абсолютно нет!');
    else if (numOfAnswer === 7) message.reply('Никак нет');
    else if (numOfAnswer === 8) message.reply('Нет');
    else if (numOfAnswer === 9) message.reply('Неа');
    else if (numOfAnswer === 10) message.reply('Cомневаюсь');
    else message.reply('Спроси позднее, я не знаю');
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

    if (['clear'].includes(command)) {
        async function clear() {
            if (message.member.roles.some(r=> [Oxpana,Kosmo,Smotri].includes(r.id))) {
                if (isNaN(args[0]))
                    return message.reply('⚠`Ошибка. Причина:` **Аргумент должен являться числом**');
                else if(args[0] < 2)
                    return message.reply('⚠`Ошибка. Причина:` **Аргумент не может являться нулем или единицей**');
                else if (args[0] >= 100) args[0] = 99
                args[0] = args[0]++   
                const fetched = await message.channel.fetchMessages({limit: args[0] + 1});
                message.channel.bulkDelete(fetched);
                let messagesForm = declOfNum(args[0], ['сообщение', 'сообщения', 'сообщений']);
                message.channel.send("✅Было успешно удалено **" + args[0] + "**🗑" + messagesForm)
                message.delete();
            } else {
                message.channel.send(message.author + ', ⚠`Ошибка. Причина:` **Вы не можете использовать команду clear**')
                return;
            }
        }
        clear();
    }

    if (['chm'].includes(command) && message.member.roles.some(r=>[Smotri, Oxpana, Kosmo].includes(r.id))) {
        let user = message.mentions.members.first(); 
        if (message.member.hasPermission("KICK_MEMBERS")) {
        if (!user) return message.channel.send(message.author + ', Ошибка. Причина: **Вы забыли упомянуть пользователя или вы хотите замутить того, кто не является пользователем**');
        if (user.id == message.author.id) return message.channel.send('Зачем ты пытаешься замутить самого себя?');
        function getSeconds(str) {
            let seconds = 0;
            let years = str.match(/(\d+)\s*y/);
            let months = str.match(/(\d+)\s*M/);
            let weeks = str.match(/(\d+)\s*w/);
            let days = str.match(/(\d+)\s*d/);
            let hours = str.match(/(\d+)\s*h/);
            let minutes = str.match(/(\d+)\s*m/);
            let secs = str.match(/(\d+)\s*s/);
            if (years) { seconds += parseInt(years[1])*31556926; }
            if (months) { seconds += parseInt(months[1])*2592000; }
            if (weeks) { seconds += parseInt(weeks[1])*604800; }
            if (days) { seconds += parseInt(days[1])*86400; }
            if (hours) { seconds += parseInt(hours[1])*3600; }
            if (minutes) { seconds += parseInt(minutes[1])*60; }
            if (secs) { seconds += parseInt(secs[1]); }
            return seconds;
        }
    
        user.addRole(Chmute);
        message.channel.send(user + ' был успешно замучен');
    
        let reason = args.join(" ").replace(user, '');
        reason = reason.replace(args[1], '');
        reason = reason.replace(' ', '');
    
        if (!reason) { 
            reason = ' Не указана'
        }
        const embed = new Discord.RichEmbed()
                    .setTitle("Информация о муте")
                    .setColor("#000594")
                    .setDescription('Вы были **замучены** пользователем ' + message.author + '\n\nВремя: **'+ args[1] + '.**\nПричина:**' + reason + '.**')
                    .setFooter("Mute")
                    .setTimestamp();
                    user.send({embed});
    
     
        if (args[1] && getSeconds(args[1]) !== 0 )
    
        setBigTimeout(() => {
            if (message.member.roles.some(r=> [muted].includes(r.id))) {
            const embedAutoUnmute = new Discord.RichEmbed()
            .setTitle("Информация о муте")
            .setColor("af00ff")
            .setDescription('Вы были автоматически **размучены**.\n\nПричина: **Автоматический размут.**')
            .setFooter("Unmute")
            .setTimestamp();
            user.send({embed: embedAutoUnmute});
            user.removeRole(muted);
            message.channel.send(user + ' был размучен');
            } else return
            }, getSeconds(args[1])*1000);
            } else return message.channel.send(message.author + ', Ошибка. Причина: **Вы не можете использовать команду mute.**');
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

    if (message.content.startsWith(p + `cuddle`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/cuddle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **прижал(а)ся к** ${user1}`)
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

    if (message.content.startsWith(p + `hentai`)) {
        message.delete();
        message.channel.send('Загрузка...').then(msg => {
    request('https://nekos.life/api/v2/img/hentai', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(message.author.username + ' Главное не дрочи...')
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

    if (message.content.startsWith(p + `tickle`)) {
        message.delete();
        let user = message.author;
        let user1 = message.mentions.users.first();
        if (!user1 || user1.id === user.id) {
            user = bot.user;
            user1 = message.author;
        }
        message.channel.send('Загрузка...').then(msg => {
            request('https://nekos.life/api/v2/img/tickle', function (error, response, body) {
                try {
                    let arr = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(':3')
                        .setDescription(`${user} **пощекотал(а)** ${user1}`)
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