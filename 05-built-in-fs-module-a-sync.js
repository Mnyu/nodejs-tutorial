// Built-in modules - fs module

// SYNC METHODS

const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// Overwrites
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
console.log('done with this task');
console.log('starting the next one');



// Appends
writeFileSync('./content/result-sync.txt', ` Here is the result : ${first}, ${second}`, { flag: 'a' });