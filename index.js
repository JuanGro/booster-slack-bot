const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/slack/test-api', function (req, res) {
  const { rawBody } = req;
  const { challenge } = rawBody;
  res.send(challenge);
});

module.exports.handler = serverless(app);