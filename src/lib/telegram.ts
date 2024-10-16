// import axiosInstance from "./axios"
import axios from "axios"
import config from "../config"

async function sendMessage(messageObj: Record<string, string>, messageText: string) {
    const MY_TOKEN = config.TELEGRAM_BOT_KEY;
    const BASE_URL = `${config.TELEGRAM_URL}${MY_TOKEN}`;
    const response = await axios.post(`${BASE_URL}/sendMessage`, {
        //@ts-ignore
        chat_id: messageObj.chat.id,
        text: messageText
    })
    return response;
}

async function getJoke() {
    const joke = await axios.get("https://v2.jokeapi.dev/joke/Any")
    return joke.data
}


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function handleMessage(messageObj: any) {
    const messageText = messageObj.text || "";

    if (messageText.charAt(0) === '/') {
        const command = messageText.substr(1);
        switch (command) {
            case "start":
                return sendMessage(messageObj, "Hello there")
            case "joke": {
                const joke = await getJoke();
                if (joke.type === "twopart") {
                    sendMessage(messageObj, joke.setup)
                    // setTimeout(() => { // netlify is unable to handle this
                    sendMessage(messageObj, joke.delivery)
                    // }, 4000);
                } else {
                    sendMessage(messageObj, joke.joke)
                }
                return;
            }
            default:
                return sendMessage(messageObj, "I don't know ")
        }
        // biome-ignore lint/style/noUselessElse: <explanation>
    } else {
        return sendMessage(messageObj, "I don't know ")
    }
}
