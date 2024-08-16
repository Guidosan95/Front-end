const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Ruta para servir socket.io.js desde node_modules
app.get('/socket.io/socket.io.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'node_modules', 'socket.io', 'client-dist', 'socket.io.js'));
});

// Ruta para servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Manejar conexiones entrantes de Socket.IO
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);

        let response = '';
        if (msg.toLowerCase() === 'hola') {
            response = '¡Hola! ¿Cómo estás?';
        } else if (msg.toLowerCase() === 'adios') {
            response = '¡Adiós! ¡Que tengas un buen día!';
        } else {
            response = 'No entiendo tu mensaje.';
        }

        // Emitir la respuesta del bot de nuevo al cliente
        io.emit('chat message', response);
    });

    // Manejar desconexiones de usuarios
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Definir el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
