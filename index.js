// 7738212934:AAGsgTNu9dMk_XLFfCiLWhY2LY4hlfTbQq8

// const TelegramBot = require('node-telegram-bot-api');
// const token = '7738212934:AAGsgTNu9dMk_XLFfCiLWhY2LY4hlfTbQq8';
// const bot = new TelegramBot(token, { polling: true });
//https://d009-179-37-63-228.ngrok-free.app
// https://api.telegram.org/bot7738212934:AAGsgTNu9dMk_XLFfCiLWhY2LY4hlfTbQq8/setWebhook?url=https://d009-179-37-63-228.ngrok-free.app
const express = require('express');
const port = 3000;
const { handler } = require("./controller");

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
    console.log(req.body);
    res.send(await handler(req))
});

app.get("*", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));