const socket = io();

// ? Escuchar Servidor Conectado
socket.on('connect', () => {
    console.log('Conectado con el servidor')
});

// ? Escuchar Servidor Desconectado
socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor')
});

// ? Mandar Información Al Servidor
socket.emit('enviarMensaje', {
    usuario: 'Andres Herrera',
    mensaje: 'Hola Mundo'
}, (resp) => {
    console.log('Respuesta Server: ', resp)
});

// ? Escuchar Información del servidor
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje)
});