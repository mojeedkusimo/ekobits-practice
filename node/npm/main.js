const request = require("request");

request("https://jsonmock.hackerrank.com/api/football_matches?year=2011", (error, response, body) => {
    if (!error && response.statusCode == 200) {
        console.log(JSON.parse(body));
    }
    else {
        console.log(body)
    }
});