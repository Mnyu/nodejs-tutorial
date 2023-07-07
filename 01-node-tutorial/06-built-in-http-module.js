// Built-in modules - http module

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type' : 'text/html' });
    res.write('<h1>Homepage</h1>');
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