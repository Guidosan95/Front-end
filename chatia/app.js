// Importa las dependencias
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Configura la aplicación Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Ruta estática para servir archivos como CSS, imágenes, etc.
app.use(express.static(__dirname + '/public'));

// Configuración del endpoint para la página principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Evento de conexión para nuevos clientes
io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');

    // Evento de recepción de mensajes
    socket.on('chat message', (msg) => {
        console.log('Mensaje recibido: ' + msg);

        // Aquí puedes implementar la lógica del bot
        // Por ejemplo, podrías usar una biblioteca como `dialogflow` para procesar el mensaje y generar una respuesta del bot.

        // Envía el mensaje del bot de vuelta al cliente
        io.emit('chat message', 'Bot: Hola, soy un bot y estoy aquí para ayudarte.');
    });

    // Evento de desconexión
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

// Inicia el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
