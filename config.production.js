// Production configuration for GitHub Pages
// This file contains the production-ready configuration

const CONFIG = {
    API_KEY: 'AIzaSyDADL0htCYzVez7EnpEvVmFp0N-BOKlSSQ', // Your API key
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
