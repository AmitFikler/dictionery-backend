# Dictionary-Backend 📖

Server side for a dictionary app.

I first uploaded all the words to Dynamodb(AWS), a process that took two days! 🥵 <br>
I then built the routers that can be seen below. 👇<br>
In the end, I uploaded everything with serverless to AWS and the client side turns to the url I got from Amazon.

## 🔗 Route `/word`

### 🖇 GET `/:word` - returns all definition of this word.

if word has more than one parts of speech will return all words part of speech, else, will return a word + definition + part of speech.

![alt text](https://i.ibb.co/QXQXChM/findWord.png)
<br>
`/word/welcome`
![alt text](https://i.ibb.co/Df5MvYp/get-word.png)

### 🖇 GET `/:word/:partOfSpeech` - returns the meaning of the word and it's part of speech.

will return a word + definition + part of speech

![alt text](https://i.ibb.co/1TQ5q4L/find-Word-With-Pos.png)
<br>
`/word/welcome/verbs`
![alt text](https://i.ibb.co/zR3Cwqt/get-word-pos.png)

## 🔗 Route `/part-of-speech`

### 🖇 GET `/:part?letter=X` (query param is optional). - return random word of the same part of speech.

returns a random word + definition + part of speech (option to receive by letters).

![alt text](https://i.ibb.co/pR1BZz5/random-Part.png)
<br>
`/part-of-speech/verbs`
![alt text](https://i.ibb.co/MBSN4m7/pos.png)
