const { handleMeassage } = require("./lib/telegram");
const { getTelegramBot } = require("./lib/axios");

async function handler(req, res) {
    const { body } = req;

    if (body) {
        const messageObj = body.message || body.edited_message || body.channel_post || body.edited_channel_post;

        await handleMeassage(messageObj);
    }
    return
}

module.exports = {
    handler
}