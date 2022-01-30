const { PART_OF_SPEECH_DICT } = require('../helpers/partOfSpeech');
const dynamoDB = require('../helpers/dynamodb');

exports.randomPartOfSpeech = async (req, res) => {
  const { part } = req.params;
  const { letter } = req.query;
  const params = {
    TableName: 'english-dict',
    FilterExpression: `#pos = :pos AND contains(#word, :word)`,
    ExpressionAttributeNames: {
      '#pos': 'pos',
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':pos': PART_OF_SPEECH_DICT[part.toLowerCase()],
      ':word': letter ? letter.toUpperCase() : '',
    },
  };
  try {
    const words = await dynamoDB.scan(params).promise();
    const RANDOM_INDEX = Math.floor(Math.random() * words.Items.length); // get random index
    res.send(words.Items[RANDOM_INDEX]); // send random word
  } catch (error) {
    res.json(error);
  }
};
