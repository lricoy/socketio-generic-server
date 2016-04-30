socketio-generic-server
=======================

[![Build Status](https://img.shields.io/travis/hden/socketio-wildcard.svg)]()
[![Dependencies](https://img.shields.io/david/hden/socketio-wildcard.svg)]()
[![devDependencies](https://img.shields.io/david/dev/hden/socketio-wildcard.svg)]()
[![npm](https://img.shields.io/npm/dm/socketio-wildcard.svg)](https://www.npmjs.com/package/socketio-generic-server)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Simple socket.io server that will just emit all the events received

The goal is to provide a simple prototype server for small frontend applications.

Works with Socket.io `v1.0.x` - `v1.4.x`.

Tested with node.js `v0.10.x`, `v0.11.x`, `v0.12.x`, `v4.x`, `v5.x`.

Installation
------------
    npm install 


Usage
-----

### Server
**Just use the app.js file as it is or configure it for your needs**

### Client

You can use socket.io as it is and all the messages will be emitted to all connected clients. 

```js
var io = require('socket.io-client');// Or simply import it in another way
var socket = io('http://localhost');

socket.emit('foo', 'bar');
socket.on('foo', function(args) {
    console.log(args); // -> ['bar']
});
```