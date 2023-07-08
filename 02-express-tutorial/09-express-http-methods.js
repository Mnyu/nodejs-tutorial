const express = require('express');
let { people } = require('./data')

const app = express();

// middleware - PARSE JSON DATA.
app.use(express.json());

// APIs
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  console.log(req.body); // will only work after adding express.urlencoded() middleware
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' });
  }
  return res.status(201).json({ success: true, person: name});
});

app.put('/api/people/:id', (req, res) => {
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

app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res.status(404).json({ success: false, msg: `No person exists with id: ${id}` });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople});
});


app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});