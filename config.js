// Configuration file for API settings
// For browser-based applications

// Export the configuration
const CONFIG = {
    API_KEY: '', // Will be set by env-loader.js
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};

// Function to set API key (called by env-loader.js)
function setApiKey(key) {
    CONFIG.API_KEY = key;
}

// Make it available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.setApiKey = setApiKey;
}
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
