'use strict';

const PORT = process.env.PORT || 8000;

var io = require('socket.io')(),
    middleware = require('socketio-wildcard')();

io.use(middleware);

io.on('connection', function(socket) {
    socket.on('join_room', function (roomToJoin) {
        socket.join(roomToJoin);
    });

    socket.on('*', function(originalArgs) {
        const eventName = originalArgs.data.slice(0, 1)[0],
            args = originalArgs.data.slice(1, originalArgs.data.length);

        if (eventName === 'join_room') return;

        // Inspect the first message for a 'room' attr
        const room = (args[0] || {}).room;    
        
        if (room)
            io.to(room).emit(eventName, args);
        else
            io.emit(eventName, args);
    });
});

io.listen(PORT);
