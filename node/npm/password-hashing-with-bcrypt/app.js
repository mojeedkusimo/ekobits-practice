const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./user_routes");

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.use((req, res, next) => {
    const newError = new Error("Page not Found");
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