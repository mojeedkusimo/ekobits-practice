const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res, next) => {
    try {
        res.send('Welcome to Api exercise');
    }
    catch (e) {
        return next(e);
    }
})

app.use((req, res, next) => {
    let err = new Error("Page not found!");
    res.stautus = 404;

    return next(err);
})

app.use((err, req, res, next) => {
    res.stautus = 500 || err.stautus;
    res.json({
        message: err.message,
        erroe: err
    })
})

app.listen(5000, () => {
    console.log('Server is running....')
})