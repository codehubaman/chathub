const socket = io();

const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username-input');
const joinButton = document.getElementById('join-button');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesDiv = document.getElementById('messages');
const welcomeMessageDiv = document.getElementById('welcome-message');

let username;

// Handle joining the chat
joinButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        socket.emit('set-username', username);
        loginContainer.classList.add('hidden');
        chatContainer.classList.remove('hidden');

        // Display a welcome message
        welcomeMessageDiv.textContent = `Welcome, ${username}! You are now in the chat.`;
    }
});

// Send message
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display the message locally
        appendMessage(`You: ${message}`, 'my-message');
        // Emit the message to the server
        socket.emit('message', message);
        // Clear the input
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Receive messages from the server
socket.on('message', (data) => {
    const { user, message, isSystem } = data;
    if (isSystem) {
        appendMessage(message, 'system-message');
    } else {
        appendMessage(`${user}: ${message}`, 'other-message');
    }
});

// Append messages to the chat box
function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
}
