import dotenv from "dotenv"

dotenv.config();

const config = {
    port: process.env.PORT,
    TELEGRAM_BOT_KEY: process.env.TELEGRAM_BOT_KEY,
    TELEGRAM_URL: process.env.TELEGRAM_URL
}

export default config;
