const express = require('express');
let { people } = require('./data')

const app = express();

// middleware for static assets
app.use(express.static('./methods-public'));

// middleware - PARSE FORM DATA.
// urlencoded - parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

// middleware - PARSE JSON DATA.
app.use(express.json());

// APIs
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Endpoint to support javascript axios submission - ./methods-public/javascript.html
app.post('/api/people', (req, res) => {
  console.log(req.body); // will only work after adding express.urlencoded() middleware
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' });
  }
  res.status(201).json({ success: true, person: name});
});

// Endpoint to support FORM DATA submission - ./methods-public/index.html
app.post('/login', (req, res) => {
  console.log(req.body); // will only work after adding express.json() middleware
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send('Please provide credentials.');
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});