const express = require('express');
const {auth} = require('../middleware/authMiddleware.js');

const {createArticle, getArticle, updateArticle, deleteArticle} = require('../controllers/articleController.js');

const router = express.Router();

router.get('/', getArticle);

router.post('/', createArticle);

router.put('/:id', updateArticle);

router.delete('/:id',auth, deleteArticle);

module.exports = router;