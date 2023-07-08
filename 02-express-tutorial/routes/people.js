// EXPRESS ROUTER : Group the routes together and setup the functionality as separate controllers.
// Router instance will take care of routing instead of the earlier used app. 

const express = require('express');
const { getPeople, createPerson, updatePerson, deletePerson } = require('../controllers/people')

const router = express.Router();

// Method 1
// ------------------------------------
// router.get('/', getPeople);
// router.post('/', createPerson);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

// Method 2
// ------------------------------------
router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router;