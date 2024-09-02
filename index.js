const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with the token you received from the BotFather
const token = '7415008284:AAGQ6RMK-OjW68HrVPP89QyrLhQqdfX-Fj4';
const bot = new TelegramBot(token, { polling: true });

// Define the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'CatsGang Bot 🐱', url: 'https://t.me/catsgang_bot/join?startapp=I3gh2lcwq_s-J5FxLZbZs' },
                    { text: 'Tomarket AI Bot 🤖', url: 'http://t.me/Tomarket_ai_bot/app?startapp=0000VPUv' }
                ],
                [
                    { text: 'Lost Dogs Bot 🐶', url: 'https://t.me/lost_dogs_bot/lodoapp?startapp=ref-u_6066419096' },
                    { text: 'Hamster Kombat Bot 🐹', url: 'https://t.me/hamster_kombaT_bot/start?startapp=kentId6066419096' }
                ],
                [
                    { text: 'Major Bot 🚀', url: 'https://t.me/major/start?startapp=6066419096' },
                    { text: 'Real Goats Bot 🐐', url: 'https://t.me/realgoats_bot/run?startapp=f2906006-4921-47b3-ba0f-24cc65b24153' }
                ],
                [
                    { text: 'CEX.IO Tap Bot 💹', url: 'https://t.me/cexio_tap_bot?start=1725027546191476' },
                    { text: 'Blum App 📱', url: 'https://t.me/blum/app?startapp=ref_oLSSlejbO7' }
                ],
                [
                    { text: 'Yescoin Bot 💰', url: 'https://t.me/theYescoin_bot/Yescoin?startapp=xu5E7R' },
                    { text: 'Catizen Bot 🕹️', url: 'https://t.me/catizenbot/gameapp?startapp=rp_31566698' }
                ],
                [
                    { text: 'TimeFarm Crypto Bot ⏳', url: 'https://t.me/TimeFarmCryptoBot?start=1ldI5wfNbO8lapb2O' },
                    { text: 'Bitget Rewards Pack 🎁', url: 'https://www.bitget.com/events/rewards-pack?clacCode=U49W939U&utmSource=rewardsnew' }
                ]
            ]
                
            
        }
    };

    bot.sendMessage(chatId, 'Select one of the following:', options);
});

console.log('Bot is running...');
