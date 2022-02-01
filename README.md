# Dictionary-Backend 📖

Server side for a dictionary app.

I first uploaded all the words to Dynamodb(AWS), a process that took two days! 🥵 <br>
I then built the routers that can be seen below. 👇<br>
In the end, I uploaded everything with serverless to AWS and the client side turns to the url I got from Amazon.

## Route `/word`

---

<br>

### GET `/:word` - returns all definition of this word.

if word has more than one parts of speech will return all words part of speech, else, will return a word + definition + part of speech.

![alt text](https://i.ibb.co/QXQXChM/findWord.png)

### GET `/:word/:partOfSpeech` - returns the meaning of the word and it's part of speech.

will return a word + definition + part of speech

![alt text](https://i.ibb.co/1TQ5q4L/find-Word-With-Pos.png)

## Route `/part-of-speech`

---

<br>

### GET `/:part?letter=X` (query param is optional). - return random word of the same part of speech.

returns a random word + definition + part of speech (option to receive by letters).

![alt text](https://i.ibb.co/pR1BZz5/random-Part.png)
