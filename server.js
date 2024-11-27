const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const users = {}; // To store usernames mapped to socket IDs

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle setting the username
    socket.on('set-username', (username) => {
        users[socket.id] = username;
        console.log(`${username} joined the chat.`);

        // Broadcast system message to all clients except the sender
        socket.broadcast.emit('message', {
            user: 'System',
            message: `${username} has joined the chat.`,
            isSystem: true,
        });
    });

    // Handle incoming messages
    socket.on('message', (msg) => {
        const username = users[socket.id] || 'Anonymous'; // Get username associated with the client
        console.log(`Message from ${username}: ${msg}`);

        // Broadcast the message to all clients except the sender
        socket.broadcast.emit('message', {
            user: username,
            message: msg,
            isSystem: false,
        });
    });

    // Handle client disconnection
    socket.on('disconnect', () => {
        const username = users[socket.id];
        console.log(`${username || 'A user'} disconnected.`);
        delete users[socket.id];

        // Broadcast system message to all clients except the sender
        socket.broadcast.emit('message', {
            user: 'System',
            message: `${username || 'A user'} has left the chat.`,
            isSystem: true,
        });
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
