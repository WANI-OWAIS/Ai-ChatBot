// Simple environment loader for development
// This script helps load environment variables in development

// For development: Load API key from localStorage or prompt user
function loadDevelopmentConfig() {
    let apiKey = localStorage.getItem('GEMINI_API_KEY');
    
    if (!apiKey) {
        // Prompt user for API key on first visit
        apiKey = prompt('Please enter your Gemini API key for development:');
        if (apiKey) {
            localStorage.setItem('GEMINI_API_KEY', apiKey);
        }
    }
    
    if (apiKey) {
        window.GEMINI_API_KEY = apiKey;
    }
}

// Auto-load in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    loadDevelopmentConfig();
}

// For production, the API key should be set via build process or server-side
