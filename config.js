// Configuration file for API settings
// This file reads environment variables from .env file

// For local development with .env file (if using a build tool)
// const API_KEY = process.env.GEMINI_API_KEY;

// For client-side applications, you'll need to either:
// 1. Use a backend server to proxy API calls
// 2. Or set the API key through a build process
// 3. Or use environment variables in your hosting platform

// For now, we'll use a function that checks for the API key
function getApiKey() {
    // Check if running in development environment with build tools
    if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
        return process.env.GEMINI_API_KEY;
    }
    
    // For production, the API key should be injected during build
    // or retrieved from your hosting platform's environment variables
    return window.GEMINI_API_KEY || '';
}

// Export the configuration
const CONFIG = {
    API_KEY: getApiKey(),
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
