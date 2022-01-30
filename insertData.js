require('dotenv').config();
const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const data = require('./dictionary.json');

const insertToDb = (event) => {
  try {
    for (const word of event) {
      const params = {
        TableName: 'english-dict',
        Item: word,
      };

      dynamoDB.put(params, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`Insert ${word.word}`);
        }
      });
    }
    return 'succses';
  } catch (e) {
    console.log(e);
    return e;
  }
};

insertToDb(data);
