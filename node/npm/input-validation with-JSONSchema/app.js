const express = require("express");
const bodyParser = require("body-parser");
const booksRoutes = require("./books_routes");

const app = express();



app.use(bodyParser.json());

app.use(booksRoutes);

app.use((req, res, next) => {
    console.log("I got here!")
    return next();
});

app.use((req, res, next) => {
    const newError = new Error("Page is not Found");
    newError.status = 404;
    next(newError);
});



app.use((err, req, res, next) => {
    res.status(err.status || 500 );
    return res.json({
        message: err.message,
        error: err
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});