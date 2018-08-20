const Discord = require(`discord.js`);
const request = require("request");
const client = new Discord.Client();
let p = ";"
//ID ролей
let Oxpana = '477045054045814793';
let Kosmo = '477045398263955456';
let Smotri = '477045398263955456';
let Chmute = '477065648544153600';
let VoiceMute = '477065632546816000';
const server_name = 'MoonChat🌒 '
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
//тут токен(секретный,Тссссссс.....)
client.login(process.env.BOT_TOKEN);
//команды
client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + 'say')) {
    let say = message.content.slice((p + 'say').length);
    const embed = new Discord.RichEmbed()
    .setColor("#000594")
    .setDescription(say)
    .setFooter(server_name+"| ;say [text]")
    .setTimestamp();
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
        .setTitle(":heart: МАТЧМЕЙКИНГ :heart:")
        .setColor("#000594")
        .setDescription('▼***' + args[0] + '***\n▲***' + args[1] + '***\n\n:revolving_hearts:Любовь в проценатах: **' + percents + '%** `[' + shkala + ']`\n:revolving_hearts:' + '\n\nВердикт: **' + loveText + '**')
        .setFooter(server_name+"| ;ship")
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
/*
client.on('voiceStateUpdate', (old_, new_) => {
    let arr = {
    "475282831220932623": "476978677872328705",
    "475282664677703703": "476978677872328705",
    "475283444260143115": "476978677872328705",
    "475282937995198465": "476978677872328705",
    "475283287368138772": "476978677872328705",
    "475283005137747978": "476978677872328705",
    "475283869143400458": "476978677872328705"
    }
    if (old_.voiceChannelID == new_.voiceChannelID) return;
    if (old_.voiceChannelID && arr[old_.voiceChannelID]) new_.removeRole(arr[old_.voiceChannelID]).catch();
    if (new_.voiceChannelID && arr[new_.voiceChannelID]) new_.addRole(arr[old_.voiceChannelID]).catch();
    console.log(arr[old_.voiceChannelID]);
    console.log(arr[new_.voiceChannelID]); 
});
*/
if(['sms'].includes(command)) {
    let user = message.mentions.members.first(); 
        if (!user) {
            message.delete
            message.author.send(message.author + ', Ошибка. Причина: **Не указан получатель сообщения**');
            return
        }
        const sendMessage = args.join(" ");
        let msg = user.send('**Вам пришло смс от** '+message.author.username + '. \n**Он сказал(а):** '+ sendMessage.replace(user, '')).catch(()=>{message.reply('***Ошибка. Причина: не указано сообщение***');
        })
        message.delete().catch(O_o=>{});
    }
	if (message.content.startsWith(p + `eval`) && message.author.id === "406343162651738112" || message.author.id === "361951318929309707") {
		const code = message.content.split(" ").slice(1).join(" ");
        try {
         let evaled = eval(code);
         if (!code) {
             return message.channel.send("А где код?");
         }
    
         if (typeof evaled !== 'string')
           evaled = require('util').inspect(evaled);
        
           const embed = new Discord.RichEmbed()
           .setTitle(`EVAL ✅`)
       
           .setColor("0x4f351")
           .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(evaled)}\`\`\``)
       
         message.channel.send({embed});
       } catch (err) {
         const embed = new Discord.RichEmbed()
         .setTitle(`EVAL ❌`)
  
         .setColor("0xff0202")
         .setDescription(`📥 Input: \n \`\`\`${code}\`\`\` \n 📤 Output: \n  \`\`\`${(err)}\`\`\``)
    
         message.channel.send({embed});
       }
	}
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
                        .setDescription(`${user} **обнял(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                       .setFooter(server_name+"| ;hug @User") 
                       .setTimestamp();
                       msg.edit({embed
                       }).then(function(message) {
                           message.react("🤝")
                       }).catch(function() {});
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
                        .setDescription(`${user} **погладил(а) по голове** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(server_name+"| ;pat @User") 
                        .setTimestamp();
                        msg.edit({embed
                    }).then(function(message) {
                        message.react("✋")
                    }).catch(function() {});
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
                            .setDescription(`${user} **поцеловал(а)** ${user1}`)
                            .setImage(arr['url'])
                            .setColor('RANDOM')
                            .setFooter(server_name+"| ;kiss @User") 
                            .setTimestamp();
                            msg.edit({embed
                            }).then(function(message) {
                                message.react("💗")
                            }).catch(function() {});
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
                        .setDescription(`${user} **ударил(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(server_name+"| ;slap @User") 
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👊")
                        }).catch(function() {});
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
                        .setDescription(`${user} **тыкнул(а) в** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(server_name+"| ;poke @User") 
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👉")
                        }).catch(function() {});
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
                        .setFooter(server_name+"| ;gasm") 
                        .setTimestamp();
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
                        .setDescription(`${user} **прижал(а)ся к** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(server_name+"| ;cuddle @User") 
                        .setTimestamp();
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("👐")
                        }).catch(function() {});
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
                        .setFooter(server_name+"| ;hentai ") 
                        .setTimestamp(); 
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
                        .setDescription(`${user} **пощекотал(а)** ${user1}`)
                        .setImage(arr['url'])
                        .setColor('RANDOM')
                        .setFooter(server_name+" | ;tickle @User") 
                        .setTimestamp(); 
                        msg.edit({embed
                        }).then(function(message) {
                            message.react("🤣")
                        }).catch(function() {});
                        } catch (e) {
                       console.log(e)
                 }
            });
        });
    }
	if (message.content.startsWith(p + `angry`)) {
		message.delete();
		 let user = message.author;
        let user1 = message.mentions.users.first();
		const urls = [
			"https://media1.tenor.com/images/3304de583bb3bb948ba0d32c0ca252f9/tenor.gif",
			"https://media.giphy.com/media/2kJY941e6bBVm/giphy.gif"
		];
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} злится`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor('RANDOM')
                        .setFooter(server_name+" | ;angry @User") 
                        .setTimestamp(); 
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                            message.react("😠")
                        }).catch(function() {});
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **злится на** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor('RANDOM')
                        .setFooter(server_name+" | ;angry @User") 
                        .setTimestamp(); 
                        message.channel.send(embed
                        ).then(function(message) {
                            message.react("😠")
                        }).catch(function() {});
    }
	if (message.content.startsWith(p + `bite`)) {
        message.delete();
	const urls = ['https://avatars.mds.yandex.net/get-pdb/477388/69159794-3747-48d7-933d-e77c888eae22/orig','https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753','https://i.gifer.com/L1lz.gif','https://i.kym-cdn.com/photos/images/newsfeed/001/093/845/d72.gif','https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565','http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-7.gif', 'http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif','http://i.imgur.com/YCAzLzh.gif','https://image.myanimelist.net/ui/uf6p6rEk2dlZoh8DIyYQTScPXcYWVkorZzR5QFff8DxXSVE36h19EcKvk3qWN8Qjz6wjzP1DvxcR9h-KIPhFblLuqgwER_AAddaI6tZVr6nk8lQiKT87JfEEq9USDPxcaCEQQ04R3UP5hio6lAMZ3g','https://vignette.wikia.nocookie.net/narutofanon/images/7/76/CanineBite.gif/revision/latest?cb=20160613052106','https://media1.tenor.com/images/a74770936aa6f1a766f9879b8bf1ec6b/tenor.gif?itemid=4676912','https://38.media.tumblr.com/a8facaed7dbb8aa75aac7cc81b144520/tumblr_mibcsb1zPZ1s4xyu5o1_500.gif', 'https://i.gifer.com/MHg3.gif'];
        let user = message.author;
        let user1 = message.mentions.users.first();
		const selfbite = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** себя`)
                        .setImage("https://78.media.tumblr.com/bbea36e4585df159eb4a339efc97313a/tumblr_ormo8ikFnO1wn2b96o1_500.gif")
                        .setColor('RANDOM')
                        .setFooter(server_name+" | ;bite @User") 
                        .setTimestamp(); 
        if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                            message.react("😱")
                        }).catch(function() {});
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${user} **укусил(а)** ${user1}`)
                        .setImage((urls[Math.floor(Math.random() * urls.length)]))
                        .setColor('RANDOM')
                        .setFooter(server_name+" | ;bite @User") 
                        .setTimestamp(); 
                        message.channel.send(embed
                        ).then(function(message) {
                            message.react("😱")
                        }).catch(function() {});
    }
	if (message.content.startsWith(p + `smoke`)) {
				      message.channel.send('Загрузка...').then(msg => {
		     const urls = ['https://thumbs.gfycat.com/SphericalDependentHalibut-small.gif', 'https://78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif', 'http://animeonline.su/uploads/posts/2015-06/1435137244_end.gif', 'https://media.giphy.com/media/hnRXZQiHWTtTO/giphy.gif', 'https://media.giphy.com/media/1k6S4iyfFyTRK/giphy.gif' ,'https://i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif', 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif', 'http://s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif', 'http://img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif', 'http://s017.radikal.ru/i424/1111/2b/ecae2f095abb.gif', 'https://78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif', 'https://78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif'];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} выкурил(а) сигарету.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM');
                    msg.edit({embed}).then(function(message) {
                            message.react("🚬")
                        }).catch(function() {});
        });
    }
	if (message.content.startsWith(p + `sleep`)) {
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
					      let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} пошел(шла) спать.`)//мне за это вообще платили??\\
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM')
			.setFooter(server_name+"| ;sleep")
		     .setTimestamp();
                    msg.edit({embed}).then(function(message) {
                            message.react("💤")
                        }).catch(function() {});
        });
    }
	if (message.content.startsWith(p + `suicide`)) {
		message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} совершил(а) суицид..`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM')
		    .setFooter(server_name+"| ;suicide")
		     .setTimestamp();
                    msg.edit({embed});
        });
	}
	if (message.content.startsWith(p + `dance`)) {
				      message.channel.send('Загрузка...').then(msg => {
					      const urls = [
			"https://media.giphy.com/media/b7l5cvG94cqo8/giphy.gif",
			"https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif",
			"https://media.giphy.com/media/9gxhLXyJXqAhi/giphy.gif",
			"https://media.giphy.com/media/1448TKNMMg4BFu/giphy.gif",
			"https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif",
			"https://media.giphy.com/media/U4CH4BYqpxlEQ/giphy.gif",
			"http://media.indiedb.com/cache/images/groups/1/1/84/thumb_620x2000/02-OP-2.gif",
			"http://media.giphy.com/media/EAOTD2L0qyvhm/giphy.gif",
			"http://media.giphy.com/media/938JXzfcl714I/giphy.gif",
			"https://media.giphy.com/media/TF1Az4ZjffK80/giphy.gif",
			"https://media.giphy.com/media/roym7Gv1DVK0/giphy.gif",
			"http://3.bp.blogspot.com/-VfIDEBGn9Gw/TaBUrYAWUZI/AAAAAAAAAmM/awcUvfHyPUE/s1600/Hayate_no_Gotoku_-_Caramelldansen.gif",
			"https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr06/29/10/anigif_enhanced-31738-1391010205-4.gif",
			"https://pa1.narvii.com/6115/a1ed9d29332a87ff81c373106db45d61df7fbbf6_hq.gif",
			"http://i0.kym-cdn.com/photos/images/newsfeed/001/153/506/bcd.gif",
			"https://img.gifmagazine.net/gifmagazine/images/677019/original.gif",
			"https://media1.tenor.com/images/b3ee0c82bf87b4cfce2067ebfa658828/tenor.gif"
		];
		     let embed = new Discord.RichEmbed()
                        .setDescription(`${message.author.username} начал танцевать.`)
                        .setImage(urls[Math.floor(Math.random() * urls.length)])
                        .setColor('RANDOM')
			.setFooter(server_name+"| ;dance")
		     .setTimestamp();
                    msg.edit({embed}).then(function(message) {
                            message.react("👯")
                        }).catch(function() {});
        });
    }
    if (message.content.startsWith(p + `cookie`)) {
        let user = message.author;
        let user1 = message.mentions.users.first();
        message.channel.send('Загрузка...').then(msg => {
            const urls = [
"http://36.media.tumblr.com/7bd24d753128822e0652319b385f68ed/tumblr_notv05MRNm1s9pgrdo1_1280.jpg",
"https://thumbs.gfycat.com/GoodPlasticEyelashpitviper-max-1mb.gif",
"https://media.giphy.com/media/SKiPNljqH8Ub6/giphy.gif",
"https://media.giphy.com/media/O8XZwrrU4NQC4/giphy-facebook_s.jpg",
"https://www.1999.co.jp/itbig35/10358248.jpg",
"https://honeysanime.com/wp-content/uploads/2015/09/sailor-moon-usagi-cookie--560x377.png",
"http://4.bp.blogspot.com/-fkkpC6FFETQ/T8S0ro_WHeI/AAAAAAAAA8E/q95UOz7jDQg/s1600/anime+cookiess_15.jpg",
"http://i.imgur.com/u4HdC.jpg",
"http://dessertrecipescorner.com/wp-content/uploads/2017/01/crunchy-and-adorable-checkerboar.jpg",
"https://blog.manga.tv/wp-content/uploads/2013/02/Cookie-Totoro-cookies-mon-voisin-my-neighbour-ghibli-miyazaki-anime-online-streaming-manga-tv-legal-gratuit-8.jpg",
"https://data.whicdn.com/images/72988865/large.png",
"https://data.whicdn.com/images/276671856/original.gif",
"http://favim.com/media/uploads/images/orig/140321/anime-food-Favim.com-1522596.gif",
"https://i.pinimg.com/originals/c5/d0/ab/c5d0ab213a38c377d1139ee57fa62e32.jpg",
"http://farm3.staticflickr.com/2894/9330100800_8535169e0f_b.jpg",
"http://i.imgur.com/E1AWI.jpg",
"https://itadakimasuanime.files.wordpress.com/2013/03/checkerboard-cookies-saint-seiya.jpg"
];
let embed = new Discord.RichEmbed()
.setDescription(`${user} **Дал печение** ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM')
.setFooter(server_name+"| ;cookie @user")
.setTimestamp();
msg.edit({embed}).then(function(message) {
    message.react("🍪")
}).catch(function() {});
});
}
if (message.content.startsWith(p + `sad`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://avatars.mds.yandex.net/get-pdb/805781/67906d0f-bda7-47a3-92d2-4ce1b4f728fd/orig",
"https://pa1.narvii.com/5821/76ddb33055d9574ccd11e051df968b4fbe5dcd18_hq.gif",
"https://i.pinimg.com/originals/94/2f/84/942f84de5d7471ab9751f2ba86e63b60.gif",
"https://steamusercontent-a.akamaihd.net/ugc/919176676388266575/8BA8145FF1760B8E60083656286E266B0DED1AA2/",
"https://pa1.narvii.com/5696/d3b317bb82fc086da90220a72cf6bfdc779e60e7_hq.gif",
"https://media.giphy.com/media/Gy7OHqaWnJBO8/giphy.gif",
"https://steamusercontent-a.akamaihd.net/ugc/2425628008261954271/007DB92C3AF029AFBBB07DFEEB1712F8B84DDDC7/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C500%3A250&composite-to=*,*%7C500%3A250&background-color=black",
"http://33.media.tumblr.com/8c701e63bdc00912c845953d57ea6097/tumblr_n3enupTctr1s2fmtuo1_500.gif",
"http://68.media.tumblr.com/4851cb0953a11f1e7a1da93c81a5bd97/tumblr_nz64zkMqPi1qe1bdeo1_500.gif",
"http://68.media.tumblr.com/2c6646ae33f53db3c4b46e2784debe61/tumblr_og7o1nlSWo1vctqxpo1_500.gif",
"http://68.media.tumblr.com/2190867b663ede80c0eea49fa5f9ac2b/tumblr_og7o2dhSc71vctqxpo1_500.gif",
"https://steamusercontent-a.akamaihd.net/ugc/923672032480155593/F58137E290C57DAA9FB7B3ED1EAC69777C76DCCF/",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-9.gif",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-15.gif",
"https://media.giphy.com/media/FB5EOw0CaaQM0/giphy.gif",
"https://thumbs.gfycat.com/CommonDownrightAndeancondor-small.gif",
"https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Ушел в печаль**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM')
.setFooter(server_name+"| ;sad")
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("😢")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `lick`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/72M.gif",
"https://media.giphy.com/media/ky2p36qednUu4/giphy.gif",
"https://i.kym-cdn.com/photos/images/original/001/084/805/287.gif",
"https://uploads.disquscdn.com/images/03f4bb0f623dc57b57ed251a0be34a36eda64367c6a2d59e88e0ac9211c2a910.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/9/9a/Ichigo_Mickey_lick.gif/revision/latest?cb=20141202220346",
"http://images.pandaapp.com/android/2011/06/20/Kanamemo-7-1-licking.gif",
"https://orig00.deviantart.net/20c8/f/2013/215/8/d/lick_2_by_anime_wolfz-d6gi186.gif",
"https://i.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
"http://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif",
"https://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/7a/Tsundere_Lick_Gif.gif/revision/latest?cb=20130828004256",
"https://vignette.wikia.nocookie.net/the-kennel/images/7/79/Haruka_dog_lick.gif/revision/latest?cb=20170206183035",
"https://media.giphy.com/media/12MEJ2ArZc23cY/source.gif",
"http://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-12.gif",
"https://media1.tenor.com/images/783188d1592d16bcc83f52639fad8fcb/tenor.gif?itemid=10816601",
"https://33.media.tumblr.com/0fc51db3ee68263bfac91dcfa9c3ebb6/tumblr_nwsmfzIbio1sfyp69o1_500.gif",
"https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738"
];
let embed = new Discord.RichEmbed()
.setDescription(`${user} **Лизнул(а)** ${user1}`)
.setImage(urls[Math.floor(Math.random() * urls.length)])
.setColor('RANDOM')
.setFooter(server_name+"| ;lick @user")
.setTimestamp();
msg.edit({embed}).then(function(message) {
message.react("😛")
}).catch(function() {});
});
}
if (message.content.startsWith(p + `nom`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"http://yeinjee.com/wp-content/uploads/2014/07/non-non-biyori-1.gif",//1
"https://78.media.tumblr.com/8c4cf9adafa72ace226f08ab4c3c9c20/tumblr_obpdd2MJlx1qmgtx5o1_500.gif",//2
"https://i.pinimg.com/originals/d6/82/df/d682df05def2a153f9e87bba4ee7b934.gif",//3
"https://media.giphy.com/media/u2Iq2GbjB0N2g/giphy.gif",//4
"https://media.giphy.com/media/RS8JlmVuNKE5a/giphy.gif",//5
"https://i.warosu.org/data/g/img/0439/60/1409896417316.gif",//6
"https://i.gifer.com/2yNA.gif",//7
"https://orig00.deviantart.net/0010/f/2015/347/c/3/yuki_nagato_nom_nom_nom______gif_animation_by_kyoflameashhylden-d9k1did.gif",//8
"https://i.imgur.com/Ryy3D7r.gif",//9
"https://media.giphy.com/media/Pl4LoOqZL8skE/source.gif",//10
"http://3.bp.blogspot.com/-UDpzj0tcQrA/T5uavPPjO8I/AAAAAAAADAQ/8HbCYDj0API/s1600/acchikocchi03.gif",//11
"https://steamusercontent-a.akamaihd.net/ugc/820063037363720336/D369DC5DF900BC55354DEC4FB5175AE7F4AE5DDC/",//12
"https://gifer.com/i/2uIY.gif",//13
"https://i.chzbgr.com/full/8972792576/h27BBD3A2/",//14
"https://media.tenor.com/images/ff8ff7fa741d8c3fc23cc3e8fe20697d/tenor.gif",//15
"https://img.gifmagazine.net/gifmagazine/images/698873/original.gif",//16
"https://media1.tenor.com/images/26beab5ca39fba753a2de57b1d74e519/tenor.gif?itemid=5215437"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Дал поесть**${user1}`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM')
.setFooter(server_name+"| ;nom @user")
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("🍱")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `hi`)) {
    let user = message.author;
    let user1 = message.mentions.users.first();
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://orig00.deviantart.net/8d1d/f/2010/319/4/b/hi_____animated_by_0febris0-d2wu3lv.gif",//1
"https://steamusercontent-a.akamaihd.net/ugc/1617175662597177927/732757601CDBF2E52C41EF3349035A337BB119D7/",//2
"https://image.noelshack.com/fichiers/2018/17/3/1524685070-df0a9rx.gif",//3
"https://thumbs.gfycat.com/HatefulBlindFunnelweaverspider-size_restricted.gif",//4
"https://thumbs.gfycat.com/AdorableFormalAngwantibo-size_restricted.gif",//5
"https://pa1.narvii.com/6505/ad5549ff5f252cd35e393f88c55d474ab83fd46d_hq.gif",//6
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-9.gif",//7
"https://kingmarsblog.files.wordpress.com/2016/08/c5612569563abae86b811071616e4c07f5b3aa18_hq.gif?w=882",//8
"https://media.tenor.com/images/b96f06f81933f49b6d24577017eb4edd/tenor.gif",//9
"https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif",//10
"https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif?itemid=5459102",//11
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif",//12
"https://data.whicdn.com/images/233897767/original.gif",//13
"http://i.imgbox.com/AYqk4UJk.gif",//14
"https://cdn105.picsart.com/203730462001202.gif?r1024x1024",//15
"https://thumbs.gfycat.com/HauntingNeighboringBarracuda-max-1mb.gif",//16
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Приветствует всех!**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM')
.setFooter(server_name+"| ;hi ")
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("👋")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `beer`)) {
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://gifer.com/i/5TNn.gif",//1
"https://vignette.wikia.nocookie.net/simpsons/images/2/29/Beer_explosion.gif/revision/latest?cb=20170620212014",//2
"https://pa1.narvii.com/5837/c09e2864bfcbd5bf8cc734c5fd69422296c44608_hq.gif",//3
"https://media1.tenor.com/images/a3ec9393688af6debf5625d77c0ec401/tenor.gif?itemid=5474067",//4
"https://i.gifer.com/IcT8.gif",//5
"https://thumbs.gfycat.com/ImportantTestyLacewing-max-1mb.gif",//6
"http://i.imgur.com/k977t5w.gif",//7
"https://gifer.com/i/Qvi.gif",//8
"http://25.media.tumblr.com/09a7dbfe31d3855794c5fb7215264fa7/tumblr_mfrzxbxoXq1s1xlbuo1_500.gif",//9
"https://thumbs.gfycat.com/CalmEminentDromedary-size_restricted.gif",//10
"https://i.pinimg.com/originals/fa/6e/5c/fa6e5cedcaa621052ec865fab6d33ac5.gif",//11
"https://media.giphy.com/media/zbMUQKqHZQ4eY/giphy.gif",//12
"https://pa1.narvii.com/5843/602066d1cc987df37c05152d5756c533a73c8947_hq.gif",//13
"https://data.whicdn.com/images/247827296/original.gif",//14
"https://media1.tenor.com/images/f6ae078aca1b3db925a76afebe1749ef/tenor.gif?itemid=7460617",//15
"https://3.bp.blogspot.com/-pjrh7AyOG6Y/VqMgqo8q4tI/AAAAAAAAW1I/MRCIdMLRJ9Y/s1600/Omake%2BGif%2BAnime%2B-%2BGATE%2B-%2BEpisode%2B15%2B-%2BItami%2BChugs%2BBeer.gif",//16
"https://media1.tenor.com/images/4657ab00910adb50ff814f8a54f210dd/tenor.gif?itemid=5081999"//17
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} **Выпел пивасика**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM')
.setFooter(server_name+"| ;beer")
.setTimestamp();
  msg.edit({embed}).then(function(message) {
          message.react("🍺")
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `||test`)) {
    message.delete();
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://media.discordapp.net/attachments/466199224254595072/480754949689442309/2x.gif",
"https://media.discordapp.net/attachments/466199224254595072/480754182325010442/1x.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`**Тест бота**`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor('RANDOM');
  msg.edit({embed}).then(function(message) {
          message.react("☑")
      }).catch(function() {});
});
}
    if(message.content.startsWith(p + 'poll')) {
		message.delete().catch(O_o => {});
		const say_poll_embed = args.join(" ");
		const embed = new Discord.RichEmbed()
			.setColor(`#000594`)
			.setDescription(say_poll_embed)
			.setFooter(server_name)
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
    .setFooter(server_name+"| ;ping")
    .setTimestamp();  
    message.channel.send({embed});
    }
    });
//help 
client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + `help`)) {
    const embed = new Discord.RichEmbed()
        .setTitle("**Все команды бота:**")
        .setColor("#000594")
        .setDescription('\n\n **__Основные__** \n\n **;help** - помощь \n **;say** `сообщение` - сказать от имени бота \n **;ping** - показать ваш пинг \n\n **__Развлекательные__** \n\n **;sms [user]** `сообщение` - сказать что-то человеку в личные сообщения \n **;ship [user/текст] [user/текст]** - проверить любовь в процентах \n **;8ball** `сообщение` - ответить боту на ваш вопрос \n\n **__Реакции__** \n\n **;hug [user]** - обнять кого-то \n **;pat [user]** - погладить кого-то \n **;kiss [user]** - поцеловать кого-то \n **;poke [user]** - тыкнуть в кого-то \n **;cuddle [user]** - прижатся к кому-то \n **;tickle [user]** - пощекотать кого-то \n **;angry** - начать злится \n **;sleep** - уснуть \n **;smoke** - выкурить сигу \n **;dance** - танцевать \n **;suicide** - сделать суицид \n **;hi** - сказать всем привет \n **;sad** - уйти в печаль \n **;bite [user]** - укусить кого-то \n **;lick [user]** - лизнуть кого-то \n **;cookie [user]** - дать печенье \n **;nom [user]** - дать поесть \n\n **__NSFW__** \n\n **;gasm** - отправить картинку оргазма \n **;hentai** - показать хентай фотку')
        .setFooter(server_name+"| ;help") 
        .setTimestamp();
    message.channel.send({embed});
}});
//статус
    client.on('ready', () => {
        client.user.setPresence({ game: { name: `за MoonChat🌒 | ;help`, type: 3 } }).catch();
    });
