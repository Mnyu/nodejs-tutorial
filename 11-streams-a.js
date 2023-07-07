// STREAMS 
//  - used to read or write sequentially.
//  - handle and manipulate streaming data e.g. continuous source or big file

// Types :
// 1. Writeable 
// 2. Readable
// 3. Duplex - both read and write data sequentially.
// 4. Transform - when data can be modified while writing or reading.

// Just like events, many built-in modules of node implement Streaming interface.
// Also interestingly, Streams extend EventEmitter class => use events with streams.

// Example : Reading a big file

// Create a big file
// --------------------------------------------------------
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big-file.txt', `Hello World ${i}\n`, { flag: 'a' });
// }

const { createReadStream } = require('fs');

// Example : 1
// const stream = createReadStream('./content/big-file.txt');

// // data is the event name
// stream.on('data', (chunk) => {
//   console.log(chunk);
// });


// by default - it reads 64KB of data once i.e. data is read in chunks with chunk size = 64KB.
// default buffer size = 64KB; last buffer = remainder
// property highWaterMark -- controls the size of buffer
// Example : 2
const stream = createReadStream('./content/big-file.txt', { highWaterMark: 90000 });
//const stream = createReadStream('./content/big-file.txt', { highWaterMark: 90000, encoding: 'utf8' });

stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('error', (error) => {
  console.log(error);
});

