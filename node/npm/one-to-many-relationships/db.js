const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://mojeedkusimo:root@localhost/grads-offers-node'
});

client.connect();

module.exports = client;