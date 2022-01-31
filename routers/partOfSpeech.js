const express = require('express');
const router = express.Router();
const { randomPartOfSpeech } = require('../controllers/partOfSpeech');

router.get('/:part', randomPartOfSpeech);

module.exports.partOfSpeechRouter = router;
