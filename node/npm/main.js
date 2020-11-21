const fs = require("fs");
const curl = new (require("curl-request"))();
const prompt = require("prompt");

prompt.start();

prompt.get(["searchTerm"], (error, result) => {
    if (error) throw error;
    findJoke(result.searchTerm);
})
// let searchParameter = process.argv[2];

let findJoke = (searchTerm) => {
    curl.setHeaders([
        "Accept: application/json"
    ])
    .get(`https://icanhazdadjoke.com/search?term=${searchTerm}`)
    .then(({statusCode, body, headers}) => {
        let jokesArray = body.results;
    
        if (jokesArray.length === 0) {
            console.log("I am sorry no joke was found for the word you entered, please try another word.");
        } else{
    
            let randomNum = Math.floor(Math.random()*jokesArray.length);
            let randomJoke = jokesArray[randomNum].joke;
            
            fs.appendFile("jokes.txt", `\n${randomJoke}`, (error) => {
                if (error) throw error;
                console.log("joke.txt has been updated!");
            });
        }
    })
    .catch((e) => {
        console.log(e);
    });    
}
