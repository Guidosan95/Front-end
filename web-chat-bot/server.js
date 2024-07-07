const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);

        // Simple bot logic
        let response = '';
        if (msg.toLowerCase() === 'hola') {
            response = '¡Hola! ¿Cómo estás?';
        } else if (msg.toLowerCase() === 'adios') {
            response = '¡Adiós! ¡Que tengas un buen día!';
        } else {
            response = 'No entiendo tu mensaje.';
        }

        // Emit the bot response back to the client
        io.emit('chat message', response);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
