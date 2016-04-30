'use strict';

const PORT = process.env.PORT || 8000;

let io = require('socket.io')(),
    middleware = require('socketio-wildcard')();

io.use(middleware);

io.on('connection', function(socket) {
    socket.on('*', function(originalArgs) {
        const eventName = originalArgs.data.slice(0, 1)[0],
            args = originalArgs.data.slice(1, originalArgs.data.length);

        socket.emit(eventName, args);
    });
});

io.listen(PORT);