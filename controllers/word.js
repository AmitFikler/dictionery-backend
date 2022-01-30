const { PART_OF_SPEECH_DICT } = require('../helpers/partOfSpeech');

const dynamoDB = require('../helpers/dynamodb');

exports.findWord = async (req, res) => {
  const { word } = req.params;
  const params = {
    TableName: 'english-dict',
    KeyConditionExpression: '#word = :word',
    ExpressionAttributeNames: {
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':word': word.toUpperCase(),
    },
  };
  try {
    const words = await dynamoDB.query(params).promise();
    res.send(words.Items);
  } catch (error) {
    res.json(error);
  }
};

exports.findWordWithPos = async (req, res) => {
  const { word, partOfSpeech } = req.params;
  const params = {
    TableName: 'english-dict',
    KeyConditionExpression: '#word = :word AND #pos = :pos',
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
    const words = await dynamoDB.query(params).promise();
    res.send(words.Items);
  } catch (error) {
    res.send(error);
  }
};
