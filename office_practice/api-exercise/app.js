const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const pug = require("pug");
require("dotenv").config({path: '../../.env'});
const colors = ["blue", "red", "green"]



const app = express();

app.set("view engine", "pug");
// app.use(express.static(__dirname + "/office_practice/public"))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const firstName = "Mojeed";
    return res.render("index", { name: firstName });
})

app.get("/colors", (require, res) => {
    return res.render("data", { colors });
});

app.get("/hello", (require, res) => {
    return res.render("hello");
});

app.use('/api/users', routes);

app.get('/api', (req, res, next) => {
    try {
        res.send('Welcome to Api exercise at the office');
    }
    catch (e) {
        return next(e);
    }
})

app.use((req, res, next) => {
    let err = new Error("Page not found");
    res.stautus = 404;

    return next(err);
})


app.use((err, req, res, next) => {
    res.status = 500 || err.status;
    res.json({
        message: err.message,
        error: err
    })
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running....')
})