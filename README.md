# AI ChatBot

A modern, responsive AI chatbot web application powered by Google's Gemini AI model. This chatbot supports both text and image inputs, providing intelligent responses in real-time.

## Features

- 💬 **Text Chat**: Send messages and receive AI-powered responses
- 🖼️ **Image Support**: Upload and analyze images with AI
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- ⚡ **Real-time**: Instant responses with loading indicators
- 📱 **Mobile Friendly**: Works seamlessly on all devices

## Demo

![AI ChatBot Interface](screenshot.png) *(Add a screenshot of your chatbot)*

## Technologies Used

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
   - Copy `.env.example` to `.env`
   ```bash
   cp .env.example .env
   ```
   - Edit `.env` and add your Google Gemini API key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **Get your Google Gemini API Key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key to your `.env` file

### Running the Application

#### Option 1: Simple HTTP Server (Recommended)

Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Using Node.js (if installed):
```bash
npx http-server
```

#### Option 2: Live Server Extension

If using VS Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 3: Direct File Opening

⚠️ **Note**: Opening the HTML file directly in the browser may not work due to CORS restrictions. Use one of the server methods above.

### Configuration for Production

For production deployment, you'll need to set up environment variables on your hosting platform:

- **Netlify**: Add environment variables in Site Settings → Environment Variables
- **Vercel**: Add environment variables in Project Settings → Environment Variables
- **GitHub Pages**: Use GitHub Secrets and a build process

## File Structure

```
ai-chatbot/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # Main JavaScript functionality
├── config.js           # Configuration management
├── .env                # Environment variables (not in repo)
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
├── README.md           # This file
└── assets/
    ├── ai.png          # AI avatar image
    ├── user.png        # User avatar image
    ├── img.svg         # Image upload icon
    ├── submit.svg      # Submit button icon
    └── loading.webp    # Loading animation
```

## Usage

1. **Start a conversation**: Type your message in the input field and press Enter or click the submit button
2. **Upload images**: Click the image icon to upload and analyze images
3. **View responses**: The AI will respond with helpful information based on your input

## API Configuration

The application uses Google's Gemini API. Make sure to:

1. Keep your API key secure and never commit it to version control
2. Monitor your API usage in the Google Cloud Console
3. Set up proper rate limiting if needed

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security Notes

- ⚠️ **Never commit your `.env` file**
- ⚠️ **API keys should never be exposed in client-side code in production**
- 🔒 **Consider implementing a backend proxy for API calls in production**
- 🛡️ **Implement rate limiting to prevent API abuse**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Google Gemini AI for providing the powerful language model
- Modern web technologies for enabling seamless user experiences

## Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/yourusername/ai-chatbot/issues) page
2. Create a new issue with detailed information
3. Provide steps to reproduce any bugs

---

**Made with ❤️ and AI**
