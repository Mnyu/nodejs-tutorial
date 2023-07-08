const express = require('express');
const logger = require('./logger'); // Externalize the logger logic to separate js file/module.

const app = express();

app.use(logger); 
// 1. Attach middleware 'logger' to all routes.
// 2. Placement of above line matters - It will only execute for routes which are placed below app.use().
// 3. If no path specified, the middleware is attached to all routes.

// app.use('/api', logger);
// This will now get only applied to rooutes with path = /api/*

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