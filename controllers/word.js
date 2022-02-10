const { PART_OF_SPEECH_DICT } = require('../helpers/partOfSpeech');
const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
});

exports.findWord = async (req, res) => {
  const { word } = req.params; // find word
  const params = {
    TableName: 'english-dict',
    KeyConditionExpression: '#word = :word',
    ExpressionAttributeNames: {
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(), // The letters in the database are in capital letters
    },
  };
  try {
    const wordsFromDB = await dynamoDB.query(params).promise(); // find words in dynamoDB
    res.json(wordsFromDB.Items);
  } catch (error) {
    res.status(404).send({ error: 'Word not found' });
  }
};

exports.findWordWithPos = async (req, res) => {
  const { word, partOfSpeech } = req.params; // find word and part-of-speech
  const params = {
    TableName: 'english-dict',
    KeyConditionExpression: '#word = :word AND #pos = :pos', // find word by name AND pos
    ExpressionAttributeNames: {
      '#word': 'word',
      '#pos': 'pos',
    },
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
      ':pos': PART_OF_SPEECH_DICT[partOfSpeech.toLowerCase()],
    },
  };
  try {
    const wordsFromDB = await dynamoDB.query(params).promise(); // find words in dynamoDB
    res.send(wordsFromDB.Items);
  } catch (error) {
    res.status(404).send({ error: 'Word not found' });
  }
};
