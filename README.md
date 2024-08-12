# GPT Bot Manager ![Beta](https://img.shields.io/badge/status-beta-yellow) ![Docker](https://img.shields.io/badge/Docker-Ready-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## _*Currently in beta*_

### Streamline gpt bot creation for Discord, Telegram and other platforms.

### 🚀 Overview
Deploy and manage bots across various messaging platforms, starting with Discord and Telegram, with planned support for Outlook, WhatsApp, Facebook, and others. With **GPT Bot Manager**, you can:

- **Easily Create Custom Bots**: Deploy bots with specific goals and behaviors tailored to your needs.
- **Customizable Settings**: Configure bot behavior by filling out straightforward forms—no coding required.
- **Contextual Understanding**: Define the scope and context in which your bot operates.
- **Function Tools**: Equip your bots with configurable tools like URL access, time fetching, and more.

### Screenshots
##### Homepage - Bot list
![Homepage - Bot list](https://catalinberta.com/files/panko/panko-gpt/screenshots/01-homepage.png)
##### Bot creation form
![Bot creation form](https://catalinberta.com/files/panko/panko-gpt/screenshots/02-create-form.png)
##### Bot vector search
![Bot vector search](https://catalinberta.com/files/panko/panko-gpt/screenshots/03-create-vector-search.png)
##### Bot functions
![Bot functions](https://catalinberta.com/files/panko/panko-gpt/screenshots/05-functions.png)

## Features ![Features](https://img.shields.io/badge/Features-8E44AD?logo=features&logoColor=white) 
- **User-Friendly Interface**: Deploy custom bots for Discord and Telegram (and soon other platforms) without the need for deep technical knowledge.
- **Customizable Behavior**: Fine-tune your bots' responses and actions using simple forms.
- **Contextual Bots**: Create bots that understand and respond based on context, enhancing their utility.
- **Configurable Tools**: Extend your bot’s capabilities with additional functions, such as internet access, time-based responses, etc.

## Planned Features (or already WIP)  ![Planned Features](https://img.shields.io/badge/Planned%20Features-F39C12?logo=rocket&logoColor=white)

- **Expanded Functionality**: More tools to enhance GPT bot capabilities.
- **Skill Development**: Pre-built skills for teaching, language practice, coding assistance, and more.
- **Vector Search Optimization**: Transition vector search from Atlas Cloud to local PostgreSQL for better performance.
  
## Prerequisites  ![Prerequisites](https://img.shields.io/badge/Prerequisites-0D6EFD?logo=docker&logoColor=white)

Before you begin, ensure you have met the following requirements:

- **Docker**
- **Discord and/or Telegram account**
- **OpenAI account**
- **MongoDB** (Cloud version with a free tier available [here](https://www.mongodb.com/cloud/atlas/register))

## 📝 Installation

To install and run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/catalinberta/panko-gpt.git
   ```

2. Navigate to the project directory:
   ```bash
   cd panko-gpt
   ```

3. Rename the example Docker Compose file:
   ```bash
   mv docker-compose.example.yml docker-compose.yml
   ```

4. Fill in the missing MongoDB Atlas environment variables in `docker-compose.yml`.

### For Development  ![For Development](https://img.shields.io/badge/For%20Development-FF5733?logo=visual-studio-code&logoColor=white) 

1. Build the development environment:
   ```bash
   docker compose build dev
   ```

2. Start the development environment:
   ```bash
   docker compose up dev
   ```

### For Production  ![For Production](https://img.shields.io/badge/For%20Production-28A745?logo=heroku&logoColor=white)

1. Build the production environment:
   ```bash
   docker compose build prod
   ```

2. Start the production environment:
   ```bash
   docker compose up prod
   ```

### Running the Application

- **Development**: Open your browser and go to [http://localhost:5003](http://localhost:5003) (local server with auto-reload).
- **Production**: Open your browser and go to [http://localhost:5002](http://localhost:5002).

## Community ![Community](https://img.shields.io/badge/Community-7289DA?logo=discord&logoColor=white)

[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289DA?logo=discord&logoColor=white)](https://eq6w.short.gy/discord-invite-github)

Join our Discord community to connect with other users, share ideas, and get support.

## ⭐️ Other links
- [Docker](https://hub.docker.com/repository/docker/catalinbertadev/panko-gpt)
- [Unraid](https://unraid.net/community/apps?q=panko-gpt)
- [Me](https://catalinberta.com)

## 🤝 Contributing
Contributions are very welcome! Whether it's adding new features, improving documentation, or reporting bugs, please feel free to make a pull request or open an issue.

## 📃 License
This project is licensed under the MIT License.
