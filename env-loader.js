// Simple environment loader for development
// This script helps load API key for browser-based applications

// For local development: Set the API key directly
function loadDevelopmentConfig() {
    // For local development, we'll set the API key directly
    // In a real production environment, this should be handled server-side
    const apiKey = 'AIzaSyDADL0htCYzVez7EnpEvVmFp0N-BOKlSSQ';
    
    if (apiKey && window.setApiKey) {
        window.setApiKey(apiKey);
        console.log('API key loaded successfully');
    } else {
        console.error('Failed to load API key');
    }
}

// Load the configuration when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDevelopmentConfig);
} else {
    loadDevelopmentConfig();
}
