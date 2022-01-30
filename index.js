require('dotenv').config();
const express = require('express');
const cors = require('cors');

const wordRouter = require('./routers/word');
const partOfSpeechRouter = require('./routers/partOfSpeech');
const path = require('path');

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/word', wordRouter);
app.use('/part-of-speech', partOfSpeechRouter);

app.use('/', express.static(path.resolve('./build'))); // serve main path as static dir
app.get('/', function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve('./build/index.html')); // send index.html
});

app.listen(process.env.PORT || port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
