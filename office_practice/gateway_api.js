var request = require('request');	
var request = require('request');
require("dotenv").config({path: '../.env'});
request.post({
  url: 'https://gatewayapi.com/rest/mtsms',
  oauth: {
    consumer_key: process.env.SMS_PUBLIC_KEY,
    consumer_secret: process.env.SMS_SECRET_KEY,
  },
  json: true,
  body: {
    sender: 'iSTEMLabs',
    message: 'Hello! Just 3 days left to our next Virtual Open Day. We look forward to seeing you there.....from GatewayApi.',
    recipients: [
        {msisdn: 2348056732063},
        // {msisdn: 2348029262211},
        // {msisdn: 2348137357919}
    ]
  },
}, function (err, r, body) {
  console.log(err ? err : body);
});