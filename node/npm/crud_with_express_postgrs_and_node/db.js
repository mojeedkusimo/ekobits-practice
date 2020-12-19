
const  { Client } = require('pg');

const client = new Client({
    connectionString: "postgresql://mojeedkusimo:root@localhost/pg-lesson-one"
});

client.connect();

module.exports = client;