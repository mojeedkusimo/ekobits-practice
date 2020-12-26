const express = require('express');
const bodyParser = require('body-parser');
const tagsRoutes = require('./tags_routes');
const messagesRoutes = require('./messages_routes');

const app = express();

app.use(bodyParser.json());
app.use('/tags', tagsRoutes);
app.use('/messages', messagesRoutes);

app.use((req, res, next) => {
    let err = new Error('Page not Found');
    err.status = 404;

    return next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        message: err.message,
        error: err
    });
});

app.listen(5000, ()=> {
    console.log('Server running on port 5000');
});