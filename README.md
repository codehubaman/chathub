Here is the updated README.md for your repository with the Render link updated:

# Chat Application - Text Chat

This is a simple real-time chat application built using **Node.js**, **Express**, and **WebSocket**. It allows multiple users to communicate in a shared chatroom.

## Features

- **Real-time messaging** using WebSockets.
- **Dynamic username input** for personalized chat messages.
- **Secure WebSocket communication** (wss://) when served over HTTPS.
- **Responsive and minimalistic UI** for sending and receiving messages.

## Application Architecture

### Backend:

- Built with **Node.js** and **Express** to serve static files and handle WebSocket connections.
- **WebSocket Server (ws)** manages real-time communication.
- Concurrent client connections are handled using WebSocket's built-in capabilities.

### Frontend:

- A simple **HTML/JavaScript** client sends and receives WebSocket messages.
- Allows users to input their username and dynamically updates the chat.
- The frontend is responsive to different screen sizes for better user experience.

## How to Run the Application Locally

### Prerequisites

1. Install [Node.js](https://nodejs.org/) on your machine.
2. You will need a modern web browser like Chrome, Firefox, or Safari.

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/codehubaman/chathub.git
   cd chathub
Install dependencies:

npm install
Start the server:

npm start
The server will run on http://localhost:3000.

Open the application in your browser by navigating to:

http://localhost:3000
You can start chatting by entering your name and sending messages.

Deployment
The application is deployed on Render and accessible via:

Chit Chat - Live Demo on Render

How to Access the Application
Visit the deployment link: https://chathub-tnin.onrender.com.
Enter your name to join the chatroom.
Start chatting in real-time with other users!
Assumptions & Design Choices
Users must provide their names at the start; anonymous names are not allowed.
Secure WebSocket communication (wss://) is automatically used for HTTPS.
A simple text-based UI was chosen to focus on core functionality.
The app is designed to work in real-time across multiple users.
