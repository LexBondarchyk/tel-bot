const TelegramApi = require('node-telegram-bot-api')

const token = '6629872442:AAEXnAO-YnA9ndsZWt1RpGHm6CGHODYt03Q';
const options = { polling: true };
const bot = new TelegramApi(token, options);

bot.setMyCommands([
    {command: '/start', description:'Вітання'},
    {command: '/info', description:'Вітання користувача'},
])

bot.on('message', async msg => { 
    const text = msg.text;
    const chatId = msg.chat.id;
    // bot.sendMessage(chatId, `це ти написав ${text}?`)  
    if (text === '/start') {
        await bot.sendMessage(chatId,'https://chpic.su/_data/stickers/k/kontrmera/kontrmera_012.webp?v=1692166022')
        await bot.sendMessage(chatId, 'Sup')
    } 
    if (text === '/info') {
        await bot.sendMessage(chatId,  `Hello ${msg.from.first_name} ${msg.from.last_name}`);
    }
})