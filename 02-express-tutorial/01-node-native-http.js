const http = require('http');
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type' : 'text/html' });
    res.write(homePage);
    res.end();
  }
  else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type' : 'text/css' });
    res.write(homeStyles);
    res.end();
  }
  else if (req.url === '/logo.svg') {
    res.writeHead(200, { 'content-type' : 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  }
  else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type' : 'text/javascript' });
    res.write(homeLogic);
    res.end();
  }
  else if (req.url === '/about') {
    res.writeHead(200, { 'content-type' : 'text/html' });
    res.write('<h3>Here is our short history</h3>');
    res.end();
  }
  else {
    res.writeHead(404, { 'content-type' : 'text/html' });
    res.write(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Back Home</a>`);
    res.end();
  }
})

server.listen(5000);