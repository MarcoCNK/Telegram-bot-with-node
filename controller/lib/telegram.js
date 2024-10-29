const { axiosInstance } = require("./axios");

function sendMeassage(messageObj, messageText) {
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}

function handleMeassage(messageObj) {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === "/") {
        const command = messageText.substring(1);

        switch (command) {
            case "start":
                return sendMeassage(messageObj, "Hello");
            case "bye":
                return sendMeassage(messageObj, "Bye");
            case "hola":
                return sendMeassage(messageObj, "Que onda");
            case "OMG":
                return sendMeassage(messageObj, "LOL");
            default:
                return sendMeassage(messageObj, "Sabías que rodri es re gay?");
        }

    } else {
        return sendMeassage(messageObj, "I don't understand");
    }
}

module.exports = {
    handleMeassage
}