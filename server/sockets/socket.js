const { io } = require('../server');

io.on('connection', (client) => {

    // ? Escuchar Usuario Conectado
    console.log('Usuario conectado');

    // ? Mandar Información Al Usuario
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    // ? Escuchar Usuario Desconectado
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // ? Escuchar Información del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({ res: 'TODO SALIO BIEN!' });
        // } else {
        //     callback({ res: 'TODO SALIO MAL!!!!' });
        // }

    });
});
