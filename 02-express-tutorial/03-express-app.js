const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
// express.static --- built in middleware
app.use(express.static('./public'));

// Method 1 - for index.html
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// Method 2 - for index.html
// index.html can also be moved to static collection in public folder and express app will serve it from there by default.

app.all('*', (req, res) => {
  res.status(404).send(`<h2>Resource not found</h2>`);
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});