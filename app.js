// Use of Promise here to understand the concepts and behind the scenes working.
// In general async await will be used.

// const { readFile, writeFile } = require('fs');
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     })
//   })
// }



// Method 1 - still can lead to callback hell
// ----------------------------------------------------------------------
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));



// Method 2 
// await - waits for the promises returned by functions to resolve nad is used inside async function.
// getText - wrapper function still looks like pain.
// ----------------------------------------------------------------------
// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);       
//   }
// }

// start();



// Method 3
// How to setup above code without the wrapper function - getText
// util - module in Node
// util.promisify
// ----------------------------------------------------------------------
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8');
//     const second = await readFilePromise('./content/second.txt', 'utf8');
//     console.log(first, second);
//     await writeFilePromise('./content/result-node-async.txt', `This is Awesome : ${first} ## ${second}`);
//   } catch (error) {
//     console.log(error);       
//   }
// }

// start();



// Method 4
// Directly use - require('').promises
// ----------------------------------------------------------------------
const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    console.log(first, second);
    await writeFile('./content/result-node-async.txt', `This is Awesome : ${first} ## ${second}...`, { flag: 'a' });
  } catch (error) {
    console.log(error);       
  }
}

start();




