// MIDDLEWARE : 
//    - Express Middleware are functions that execute during the request to the server.
//    - Each middleware function has access to request and response object.
//    - Middleware is everywhere in express => important to understand.

// REQUEST ===> MIDDLEWARE ===> RESPONSE

const express = require('express');

const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // pass control to next middleware, unless terminating the whole cycle by sending back the response.
  next();
}

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});