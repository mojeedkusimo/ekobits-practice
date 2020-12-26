const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://mojeedkusimo:root@localhost/messages-tags-node'
});

client.connect();

module.exports = client;