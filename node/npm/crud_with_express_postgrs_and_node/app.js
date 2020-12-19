const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/fishes', routes);

app.get('/', (req, res) => {
    res.send('Welcome to my fish app');
});

app.listen(3333, () => {
    console.log('Server running on port 3333');
});