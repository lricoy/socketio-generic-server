var io = require('socket.io-client');
var socket = io('http://localhost:8000');

socket.emit('join_room', 'foobar');
socket.emit('foo', {bar: 'bar', room: 'foobar'});
socket.on('foo', function(args) {
    console.log(args); // -> ['bar']
});