const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 

  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(chatId)
 

  bot.sendMessage(chatId, `New Gift Package Created: ${msg.text}`);
});