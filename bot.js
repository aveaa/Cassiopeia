const Discord = require(`discord.js`);
const request = require("request");
const client = new Discord.Client();
//подклюение commands.js
require('./commands.js')
//exports
exports.client=client;
//ID ролей
let Oxpana = '477045054045814793'
let Kosmo = '477045398263955456'
let Smotri = '477045398263955456'
let Chmute = '477065648544153600'
let VoiceMute = '477065632546816000'
//тут токен
client.login(process.env.BOT_TOKEN);
//help 
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
//статус
    client.on('ready', () => {
        client.user.setPresence({ game: { name: `Cosmic ⛧ Player's | ;help`, type: 3 } }).catch();
    });