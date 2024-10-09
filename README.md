# Giggle Guru 🤖

**Giggle Guru** is a Telegram bot built with Node.js and the Telegram Bot API. It is designed to entertain users with jokes, fun facts, and witty responses, making your day a bit more fun and cheerful!

## Features 🎉

- 🤣 Fetch random jokes from public APIs.
- 📚 Share interesting and fun facts.
- 💡 Witty and humorous responses to user commands.
- 🕹 Simple commands to interact with the bot.

## Tech Stack 🛠

- **Node.js** - Backend server and bot logic.
- **Telegram Bot API** - Communication with the Telegram platform.

## Prerequisites ✅

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- Telegram account
- A Telegram bot token (you can create a bot via the [BotFather](https://core.telegram.org/bots#botfather))

## Getting Started 🚀

Follow these instructions to set up and run the project locally.

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/yourusername/giggle-guru.git
cd giggle-guru
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following:

\`\`\`bash
TELEGRAM_TOKEN=your-telegram-bot-token-here
\`\`\`

### 4. Run the bot

Start the bot using the following command:

\`\`\`bash
npm start
\`\`\`

The bot should now be running and connected to Telegram. You can interact with it by sending messages to your bot via Telegram!

## Available Commands 🗒

- `/start` - Starts the interaction with Giggle Guru.
- `/joke` - Get a random joke.
- `/fact` - Receive a fun fact.
- `/help` - Displays help and command info.

## Project Structure 📂

\`\`\`
giggle-guru/
│
├── src/
│ ├── bot.js # Main bot logic
│ └── commands/ # Command-specific logic
│
├── .env # Environment variables
├── package.json # Project metadata and dependencies
└── README.md # Project documentation
\`\`\`

## Contributing 🤝

Contributions are welcome! Feel free to open an issue or submit a pull request to improve Giggle Guru.

## License 📄

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements 🙌

- Thanks to [Telegram](https://telegram.org) for providing an easy-to-use Bot API.
- Special shoutout to all the public APIs that provide jokes and fun facts.

---

**Giggle Guru** – Bringing a smile to your Telegram chats!
