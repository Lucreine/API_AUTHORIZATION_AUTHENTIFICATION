const express = require('express');

const {getUser, updateUser, deleteUser} = require('../controllers/userController.js');
// const {auth} = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;