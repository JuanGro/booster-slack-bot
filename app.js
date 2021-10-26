const { App, AwsLambdaReceiver } = require('@slack/bolt');
require('dotenv').config()

// Initialize your custom receiver
const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Initializes your app with your bot token and the AWS Lambda ready receiver
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
  // The `processBeforeResponse` option is required for all FaaS environments.
  // It allows Bolt methods (e.g. `app.message`) to handle a Slack request
  // before the Bolt framework responds to the request (e.g. `ack()`). This is
  // important because FaaS immediately terminate handlers after the response.
  processBeforeResponse: true
});

app.event('app_mention', ({ say }) => say('Hello!'))

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
  await say(`Hello, <@${message.user}> :tada:`);
});

app.message('goodbye', async ({ message, say }) => {
  await say(`See ya later, <@${message.user}> :wave:`);
});

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
}