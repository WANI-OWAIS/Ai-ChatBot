
# AI ChatBot

A modern, responsive AI chatbot web application powered by Google's Gemini AI model. This chatbot supports both text and image inputs, providing intelligent responses in real-time.

## 🌟 Live Demo
**[Try the ChatBot Live](https://wani-owais.github.io/Ai-ChatBot/)**

## Features

- 💬 **Text Chat**: Send messages and receive AI-powered responses
- 🖼️ **Image Support**: Upload and analyze images with AI
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- ⚡ **Real-time**: Instant responses with loading indicators
- 📱 **Mobile Friendly**: Works seamlessly on all devices

## Screenshots

### Main Interface
![AI ChatBot Interface](https://raw.githubusercontent.com/WANI-OWAIS/Ai-ChatBot/main/assets/screenshots/interface.png)

### Chat Example
![Chat Conversation](https://raw.githubusercontent.com/WANI-OWAIS/Ai-ChatBot/main/assets/screenshots/chat.png)

*Real screenshots of the AI ChatBot in action*## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)  
- **AI Model**: Google Gemini 1.5 Flash  
- **API**: Google Generative Language API  
- **Styling**: Custom CSS with modern design principles  

## Setup Instructions

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)  
- Google Gemini API key  

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

3. **Edit `.env` and add your Gemini API key**
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Get your API key** from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Running the Application

#### Option 1: Python HTTP Server

```bash
python -m http.server 8000
```

#### Option 2: Node.js HTTP Server

```bash
npx http-server
```

#### Option 3: VS Code Live Server Extension

1. Right-click `index.html` → "Open with Live Server"

#### Option 4: Direct File Opening

⚠️ *Not recommended due to CORS restrictions.*

### Production Deployment

Set environment variables on your host:

- **Netlify** → Site Settings → Environment Variables  
- **Vercel** → Project Settings → Environment Variables  
- **GitHub Pages** → Use GitHub Secrets + build tools  

## File Structure

```
ai-chatbot/
├── index.html              # Main HTML file
├── style.css               # Stylesheet
├── script.js               # Main JavaScript functionality
├── config.js               # Development configuration
├── config.production.js    # Production configuration
├── env-loader.js           # Environment loader for development
├── .env                    # Environment variables (not in repo)
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── README.md               # This file
└── assets/
    ├── avatars/
    │   ├── ai.png          # AI avatar image
    │   └── user.png        # User avatar image
    ├── icons/
    │   ├── img.svg         # Image upload icon
    │   ├── submit.svg      # Submit button icon
    │   └── loading.webp    # Loading animation
    └── screenshots/
        ├── interface.png   # Main interface screenshot
        └── chat.png        # Chat conversation example
```

## Usage

1. **Start a conversation**: Type in the input and press Enter  
2. **Upload images**: Click 📷 icon to analyze an image  
3. **Wait for response**: AI responds with real-time data  

## API Configuration

- Keep API key secure (never push `.env`)  
- Monitor usage in Google Cloud Console  
- Use a backend proxy in production if needed  


---

## 🖼️ App Preview

### 🔹 AI ChatBot Interface

<p align="center">
  <img src="./screenshot.png" alt="AI ChatBot Screenshot" width="800"/>
</p>


## Contributing

1. Fork the repository  
2. Create a branch (`git checkout -b feature/amazing-feature`)  
3. Commit (`git commit -m "Add feature"`)  
4. Push (`git push origin feature/amazing-feature`)  
5. Open a Pull Request  

## Security Notes

- ❗ Do not commit `.env`  
- ❗ Avoid exposing secrets in client-side code  
- 🔒 Use server-side proxy if needed  
- 🛡️ Add rate limiting in production  

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file.

## Acknowledgments

- Google Gemini AI for the language model  
- All open-source tools that made this project possible  

## Support

- [Issues Page](https://github.com/yourusername/ai-chatbot/issues)  
- Create a new issue with details

---

<div align="center">
  <strong>Made with ❤️ by WANIOWAIS</strong><br/>
  ⭐ Star this repo if you found it helpful!
</div>
