const express = require('express');
const router = express.Router();
const { findWord, findWordWithPos } = require('../controllers/word');

router.get('/:word', findWord);

router.get('/:word/:partOfSpeech', findWordWithPos);

module.exports = router;
