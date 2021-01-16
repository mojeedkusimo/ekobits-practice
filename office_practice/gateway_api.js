var request = require('request');
let bcrypt = require('bcrypt');
let md5 = require('md5');
require("dotenv").config({path: '../.env'});

let hashedCode = async (num) => {
  // let code = await bcrypt.hash('2348056732063', 5);
  let code = md5(`${num}`);
  let uniqueCode = code.slice(25,);
  return uniqueCode;
};

let sendSMS = (num) => {
  request.post({
    url: 'https://gatewayapi.com/rest/mtsms',
    oauth: {
      consumer_key: process.env.SMS_PUBLIC_KEY,
      consumer_secret: process.env.SMS_SECRET_KEY,
    },
    json: true,
    body: {
      sender: 'iSTEMLabs',
      message: `Hello! Just 3 days left to our next Virtual Open Day. We look forward to seeing you there.....from GatewayApi. Your discount code is ${hashedCode(num)}`,
      recipients: [
          {msisdn: num}
      ]
    },
  }, function (err, r, body) {
    console.log(err ? err : body);
  });  
}

let numbers = [2348056732063, 2348029262211, 2348137357919];

numbers.forEach(val => {
  sendSMS(val);
})