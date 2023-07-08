// EXPRESS ROUTER : Group the routes together and setup the functionality as separate controllers.

const express = require('express');
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

const app = express();

// middleware for static assets
app.use(express.static('./methods-public'));

// middleware - PARSE FORM DATA.
// urlencoded - parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

// middleware - PARSE JSON DATA.
app.use(express.json());

// middleware - ROUTERS
app.use('/api/people', peopleRouter); // For the paths that start with /api/people, use peopleRouter
app.use('/login', authRouter);  // For the paths that start with /login, use authRouter


app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});