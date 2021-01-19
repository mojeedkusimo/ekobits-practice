const { Client } = require("pg");
require("dotenv").config({path: '../../.env'});

const client = new Client({
    connectionString: process.env.CONNECTION_STRING
    // connectionString: 'postgresql://mojeedkusimo:root@localhost/api-exercise-users'
})

client.connect();

module.exports = client;

// postgresql://mojeedkusimo:root@localhost/api-exercise-users