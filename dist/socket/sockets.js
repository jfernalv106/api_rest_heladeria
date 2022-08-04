"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mensaje = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
};
exports.desconectar = desconectar;
const mensaje = (cliente, io) => {
    cliente.on('mensaje-nuevo', (payload) => {
        console.log('Mensaje recibido', payload);
        const { mensaje } = payload;
        io.emit('mensaje-recibido', {
            mensaje
        });
    });
};
exports.mensaje = mensaje;
//# sourceMappingURL=sockets.js.map