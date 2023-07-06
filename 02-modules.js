// Modules - Encapsulated Code (only share minimum).
// Modules - Built-in, 3rd Party and Custom types.
// Node uses CommonJS library under the hood, every file is a module (by default).


const names = require('./02-names')
const sayHi = require('./02-utils')
const data = require('./02-z-alternate-module-export')

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

console.log(data);