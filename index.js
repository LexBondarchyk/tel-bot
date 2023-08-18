const { Telegraf, Markup } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();

const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Hello ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Incognito'}!`));
bot.help((ctx) => ctx.reply(text.commands));

bot.command('course', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Lesson one</b>', Markup.inlineKeyboard(
             [
                 [Markup.button.callback('Edit', 'btn_1'), Markup.button.callback('mb later', 'btn_2')],
                 [Markup.button.callback('go home', 'btn_3'), Markup.button.callback('too late', 'btn_4'), Markup.button.callback('good by', 'btn_5')]
             ]
        ))
        
    } catch (e) {
        console.error(e)
    }
})

function addActionBot(name, src, text) {
    bot.action(name, async (ctx)=>{
    try {
        await ctx.answerCbQuery()
        if (src !==false) {
        await ctx.replyWithPhoto({
            source: src
        })
    }
        await ctx.replyWithHTML(text, {
            disable_web_page_preview: true
        })
    }  catch (e) {
        console.error(e)
    }
    })
}
addActionBot('btn_1', './img/1.jpg', text.text1);
addActionBot('btn_2', './img/2.jpg', text.text2)
addActionBot('btn_3', false, text.text3)


bot.launch();



// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));