const express = require('express');
const router = express.Router();

const {
    getPeople,
    postPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/person')

// router.get('/', getPeople)
// router.post('/', postPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(postPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router