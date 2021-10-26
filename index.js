// const serverless = require('serverless-http');
// const express = require('express');
// const app = express();

const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');

require('dotenv').config();

const { SLACK_SIGNING_SECRET, SLACK_TOKEN, SLACK_PORT } = process.env;

const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET);
const slackClient = new WebClient(SLACK_TOKEN);

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// app.get('/api', function (req, res) {
//   res.send('API working!');
// });

// app.post('/slack/test-api', function (req, res) {
//   try {
//     const { challenge } = req.body;
//     console.log(challenge);
//     res.status(200).send(challenge);
//   } catch (error) {
//     res.status(500).send('Incorrect parameters');
//   }
// });

slackEvents.on('app_mention', (event) => {
  console.log(`Got message from user ${event.user} ${event.text}`);
  (async () => {
    try {
      await slackClient.chat.postMessage({ channel: event.channel, text: `Hello <@${event.user}>! ::tada::`})
    } catch (error) {
      console.log(error.data);
    }
  })();
});

slackEvents.on('error', console.error);

slackEvents.start(SLACK_PORT || 3000).then(() => {
  console.log(`Server started on port ${SLACK_PORT}`)
});

module.exports.handler = serverless(slackEvents);