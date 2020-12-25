const express = require('express');
const bodyParser = require('body-parser');
const graduateRoutes = require('./graduates_routes');
const offerRoutes = require('./offer_routes');


const app = express();
app.use(bodyParser.json());
app.use('/graduates', graduateRoutes);
app.use('/graduates/:graduate_id/offers', offerRoutes);

app.use((req, res, next) => {
    let err = new Error('Page not Found');
    err.status = 404;

    return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 505);

    return res.json({
        message: err.message,
        error : err
    });
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});
