const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

let students = ["Elie", "Matt", "Joel", "Michael"];

app.get("/", (req, res) => {
    res.json(students);
});

module.exports = app;