const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('All Users'));
router.post('/', (req, res) => res.send('Create New User'));
router.get('/:id', (req, res) => res.send(`Get user with ID: ${req.params.id}`));

module.exports = router;