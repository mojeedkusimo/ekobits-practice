const fs = require('fs');

fs.readFile("node/reader/data.txt", function(err, data) {
    if (err) {
        throw err;
    } else {
        console.log(data.toString()[0]);
    }
});