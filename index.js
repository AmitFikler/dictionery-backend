require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');

const { wordsRouter } = require('./routers/word');
const { partOfSpeechRouter } = require('./routers/partOfSpeech');
// const path = require('path');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server is up =D');
});
app.use('/word', wordsRouter);
app.use('/part-of-speech', partOfSpeechRouter);

// app.use('/', express.static(path.resolve('./build'))); // serve main path as static dir
// app.get('/', function (req, res) {
//   // serve main path as static file
//   res.sendFile(path.resolve('./build/index.html')); // send index.html
// });

module.exports.handler = serverless(app);
