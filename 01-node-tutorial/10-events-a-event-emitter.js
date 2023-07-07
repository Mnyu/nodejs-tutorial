// Events & Event Driven Programming - used heavily in Node.js
// Idea : Listen for specific events and register functions that will execute in response to those events.

// EventEmitter is a class
// 1. For custom events - extend the class EventEmitter
// 2. To simply emit an event and listen for it - create the instance of EventEmitter

// Methods :
// 1. emit - emit an event
// 2. on - listen for an event

// Order of where the emit function is placed matters. All on functions after emit function are not triggered for that event.
// BOTTOM LINE : FIRST LISTEN FOR THE EVENT AND THEN EMIT THE EVENT.

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// Basic Example
customEmitter.on('response', (name, id) => {
  console.log(`data received :- user ${name} has id: ${id}`);
});

customEmitter.on('response', () => {
  console.log(`some other logic here`);
});

customEmitter.emit('response', 'john', 34);

customEmitter.on('response', () => {
  console.log(`This would not be triggered`);
});

// Even though you might not write your own events, events are core building block of node 
// and effectively as you are building your node app, you are using events 
// as a lot of built-in modules rely on them.
