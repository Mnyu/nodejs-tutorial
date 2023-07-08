// EXPRESS ROUTER : Group the routes together and setup the functionality as separate controllers.
// Router instance will take care of routing instead of the earlier used app. 

const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  return res.status(401).send('Please provide credentials.');
});

module.exports = router