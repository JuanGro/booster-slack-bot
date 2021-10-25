const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/slack/test-api', function (req, res) {
  console.log('req', req);
  console.log('body', req.body);
  console.log('challenge', req.body.challenge);
  res.send('done');
});

module.exports.handler = serverless(app);