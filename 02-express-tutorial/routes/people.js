// EXPRESS ROUTER : Group the routes together and setup the functionality as separate controllers.
// Router instance will take care of routing instead of the earlier used app. 

const express = require('express');
let { people } = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post('/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' });
  }
  return res.status(201).json({ success: true, person: name});
});
  
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person exists with id: ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  return res.status(200).json({ success: true, data: newPeople});
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person exists with id: ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople});
});

module.exports = router;