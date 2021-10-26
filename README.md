# Manual Testing Backend

_This repository contains a [Node](https://nodejs.org) app to implement a slack bot._

## Index

* [Technologies](#technologies)
* [Architecture](#architecture)
* [Usage](#usage)
    * [Docker-compose](#docker-compose)
    * [Manual](#manual)
* [Tests](#tests)
* [Deployment](#deployment)

## Technologies

[![Node](https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org)
[![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com)
[![Jest](https://img.shields.io/badge/-jest-%23C21325?logo=jest&logoColor=white)](https://jestjs.io)
[![Eslint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)](https://eslint.org)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?logo=docker&logoColor=white)](https://www.docker.com)
[![AWS](https://img.shields.io/badge/Amazon_AWS-%23FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com)
[![Github](https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white)](https://github.com)

## Architecture

[Architecture Diagram](#)

## Usage

To execute this [Node](https://nodejs.org) API, you have two alternatives, use [Docker compose](https://docs.docker.com/compose/) or run the code manually.

In both cases you must create a file called `.env` to define all the variables needed to run the app. You can see an example of this file in `.env.example`.

### [Docker-compose](https://docs.docker.com/compose/)

To run the container, you must have installed [docker](https://www.docker.com) in your machine. Only execute:

```bash
docker-compose up --build
```

### Manual

**First, you must have installed [Node](https://nodejs.org/es/) version `14`.**

Then, install the dependencies using:

```bash
npm install
```

Finally, use this command to run the app:

```bash
npm start
```

## Tests

To run the tests locally follow the above [manual usage](#manual) and then execute:

```bash
npm test
```

## Deployment

The app is deployed in [AWS](https://aws.amazon.com) using [serverless](https://www.serverless.com).

[Go to API](https://ss49p1awi3.execute-api.us-east-1.amazonaws.com/dev/slack/events)
