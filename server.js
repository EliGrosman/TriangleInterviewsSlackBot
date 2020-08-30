require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const qs = require('qs');
const signature = require('./verifySignature');
const app = express();
const apiUrl = 'https://slack.com/api';

const slackapi = require('simple-slack-api')
const slack = new slackapi(process.env.SLACK_ACCESS_TOKEN, process.env.SLACK_SIGNING_SECRET, process.env.SLACK_VERIFICATION_TOKEN)

const rawBodyBuffer = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

app.use(bodyParser.urlencoded({ verify: rawBodyBuffer, extended: true }));
app.use(bodyParser.json({ verify: rawBodyBuffer }));



const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Slack-bot running on port %d in %s mode', server.address().port, app.settings.env);
});