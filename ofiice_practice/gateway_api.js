var request = require('request');
request.post({
  url: 'https://gatewayapi.com/rest/mtsms',
  oauth: {
    consumer_key: 'OCAI1koN5KdKlLP4PBZulMuP',
    consumer_secret: 'K5rMzXdk(^tAHXOBF.0@hML@HPuSkaDu&nOtXxqk',
  },
  json: true,
  body: {
    sender: 'iSTEMLabsAfrica',
    message: 'Hello! Just 3 days left to our next Virtual Open Day. We look forward to seeing you there.....from GatewayApi.',
    recipients: [
        {msisdn: 2348056732063},
        {msisdn: 2348029262211},
        {msisdn: 2348137357919}
    ]
  },
}, function (err, r, body) {
  console.log(err ? err : body);
});
