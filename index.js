const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/slack/test-api', function (req, res) {
  try {
    res.status(200).send(req.body.challenge);
  } catch (error) {
    res.status(500).send('Incorrect parameters');
  }
});

module.exports.handler = serverless(app);