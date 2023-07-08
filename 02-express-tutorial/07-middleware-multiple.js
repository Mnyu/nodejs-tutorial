const express = require('express');
const logger = require('./logger'); 
const authorize = require('./authorize'); 

const app = express();

app.use([logger, authorize]); 
// 1. Execute multiple middlewares.
// 2. Middlewares will be executed in the order specified.

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/users', (req, res) => {
  res.send('Users');
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});