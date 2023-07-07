const http = require('http');
const { EventEmitter } = require('stream');

// Before
const serverWithCallBackSetup = http.createServer((req, res) => {
  res.end('Welcome');
});


// Using Event Emitter API
const server = http.createServer();
// emits request event

// subscribe to it / listen to it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

console.log(serverWithCallBackSetup instanceof EventEmitter); // true
console.log(server instanceof EventEmitter); // true

server.listen(5000);