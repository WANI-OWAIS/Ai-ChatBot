// Select necessary DOM elements
let prompt = document.querySelector("#prompt"); // Input field for user message
let submitbtn = document.querySelector("#submit"); // Submit button
let chatContainer = document.querySelector(".chat-container"); // Container for chat messages
let imagebtn = document.querySelector("#image"); // Button to attach images
let image = document.querySelector("#image img"); // Image preview element
let imageinput = document.querySelector("#image input"); // Hidden file input for image uploads

// API endpoint for generating chatbot responses
const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key="AIzaSyD96xi9YTTwtRnJQu6vJdCl2LPTxJ8BFE4";

// Object to store user input (text message and optional file data)
let user = {
    message: null, // User's text message
    file: {
        mime_type: null, // File MIME type (e.g., image/png)
        data: null       // Base64-encoded file data
    }
}

// Function to fetch and display AI chatbot response
async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector(".ai-chat-area"); // Target the AI response area

    // Prepare API request options
    RequestOption = {
        method: "POST", // HTTP POST method
        headers: { 'Content-Type': 'application/json' }, // Set request headers
        body: JSON.stringify({
            "contents": [
                {
                    "parts": [{ "text": user.message }, ...(user.file.data ? [{ "inline_data": user.file }] : [])] // Include file data if provided
                }
            ]
        })
    };

    try {
        // Make the API request
        let response = await fetch(Api_Url, RequestOption);
        let data = await response.json(); // Parse JSON response
        // Extract and format AI-generated response
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        text.innerHTML = apiResponse; // Display the response
    } catch (error) {
        // Log errors to the console
        console.log(error);
    } finally {
        // Scroll chat to the latest message
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
        // Reset image preview and file data
        image.src = `img.svg`;
        image.classList.remove("choose");
        user.file = {};
    }
}

// Function to create a chat message box dynamically
function createChatBox(html, classes) {
    let div = document.createElement("div"); // Create a new div element
    div.innerHTML = html; // Set the inner HTML of the element
    div.classList.add(classes); // Add specified CSS classes
    return div; // Return the created element
}

// Function to handle user message submission and initiate AI response
function handleChatResponse(userMessage) {
    user.message = userMessage; // Set the user's message
    // Create the user chat box HTML
    let html = ` 
    <img src="user.png" alt="" id="userImage" width="8%">
    <div class="user-chat-area">
    ${user.message}
    ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
    </div>`;
    prompt.value = ""; // Clear the input field
    let userChatBox = createChatBox(html, "user-chat-box"); // Create user chat box
    chatContainer.appendChild(userChatBox); // Append user chat box to the container
    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' }); // Scroll to the latest message

    // Simulate delay before showing AI response
    setTimeout(() => {
        // Create the AI chat box HTML
        let html = `
        <img src="ai.png" alt="" id="aiImage" width="10%">
        <div class="ai-chat-area">
        <img src="loading.webp" alt="" class="load" width="50px"> <!-- Loading indicator -->
        </div>`;
        let aiChatBox = createChatBox(html, "ai-chat-box"); // Create AI chat box
        chatContainer.appendChild(aiChatBox); // Append AI chat box to the container
        generateResponse(aiChatBox); // Call function to fetch AI response
    }, 600); // 600ms delay
}

// Event listener for "Enter" key to submit user message
prompt.addEventListener("keydown", (e) => {
    if (e.key === "Enter") { // Check if Enter key is pressed
        handleChatResponse(prompt.value); // Handle the response
    }
});

// Event listener for submit button click
submitbtn.addEventListener("click", () => {
    handleChatResponse(prompt.value); // Handle the response
});

// Event listener for image file selection
imageinput.addEventListener("change", () => {
    const file = imageinput.files[0]; // Get the selected file
    if (!file) return; // Exit if no file is selected

    let reader = new FileReader(); // Create a FileReader instance
    reader.onload = (e) => {
        let base64string = e.target.result.split(",")[1]; // Extract Base64 string from file
        user.file = {
            mime_type: file.type, // Set file MIME type
            data: base64string    // Set Base64-encoded data
        };
        image.src = `data:${user.file.mime_type};base64,${user.file.data}`; // Update image preview
        image.classList.add("choose"); // Add CSS class to style the image
    };
    reader.readAsDataURL(file); // Read file as a Base64 data URL
});

// Event listener for image button click
imagebtn.addEventListener("click", () => {
    imagebtn.querySelector("input").click(); // Trigger file input click
});
