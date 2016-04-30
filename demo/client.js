var io = require('socket.io-client');
var socket = io('http://localhost:8000');

socket.emit('foo', 'bar');
socket.on('foo', function(args) {
    console.log(args); // -> ['bar']
});