# Manual Testing Backend

_This repository contains a [Node](https://nodejs.org) app to implement a slack bot._

## Index

* [Instructions](#instructions)
* [Technologies](#technologies)
* [Architecture](#architecture)
* [Usage](#usage)
* [Deployment](#deployment)

## Instructions

To use this chatbot, please enter to my personal slack space, then you can interact with the bot sending the next messages in the #slack-bot channel:

To say hello

```
Hello @Booster Slack Bot
```

To get a vehicle

```
VIN 1G8DC18H4CF114023
```

To get all the models for the make

```
Make honda 
```

To say bye

```
Bye
```

## Technologies

[![Node](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?logo=jest&logoColor=white)](https://jestjs.io)
[![Eslint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)](https://eslint.org)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com)
[![AWS](https://img.shields.io/badge/Amazon_AWS-%23FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![Github](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)](https://github.com)
[![Slack](https://img.shields.io/badge/Slack-4A154B?logo=slack&logoColor=white)](https://slack.com)

## Architecture

The architecture was build with a [microservice](https://microservices.io) in [Node](https://nodejs.org) and deployed in a [AWS Lambda](https://aws.amazon.com/lambda/), it works with [slack](https://slack.com) when the user mentions the bot or interacts with it. Also, this microservice connects with the [Vehicle API](https://vpic.nhtsa.dot.gov/api/Home) to request the vehicles information.

## Usage

To execute this [Node](https://nodejs.org) API locally, you can use [serverless offline](https://www.serverless.com/plugins/serverless-offline).

**First, you must have installed [Node](https://nodejs.org/es/) version `14`.**

Then, install the dependencies using:

```bash
npm install
```

Finally, use this command to run the app:

```bash
npm start
```

## Deployment

The app is deployed in [AWS](https://aws.amazon.com) using [serverless](https://www.serverless.com) with [Github Actions](https://github.com/features/actions).

[Go to API](https://ss49p1awi3.execute-api.us-east-1.amazonaws.com/dev/slack/events)
