const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const appRoutes = require("./expressjs-exercise-router");


app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to XYZ Shop!");
});

app.use("/items", appRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});