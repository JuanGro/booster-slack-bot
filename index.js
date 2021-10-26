const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/api', function (req, res) {
  res.send('API working!');
});

app.post('/slack/test-api', function (req, res) {
  try {
    const { challenge } = req.body;
    console.log(challenge);
    res.status(200).send(challenge);
  } catch (error) {
    res.status(500).send('Incorrect parameters');
  }
});

module.exports.handler = serverless(app);