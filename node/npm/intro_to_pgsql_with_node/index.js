const { Client } = require("pg"); // include the Client constructor from the pg module

// make a new instance of the Client constructor and specify which db to connect to using the connectionString key
const client = new Client({
  connectionString: "postgresql://mojeedkusimo:root@localhost/pg-lesson-one"
    // user: 'mojeedkusimo',
    // host: 'localhost',
    // database: 'pg-lesson-one',
    // password: 'root'
});

// connect!
client.connect();

// let's make a function to get all the rows in our students table!
async function getStudents() {
  const results = await client.query("SELECT * FROM students");
  console.log(results.rows);
}


async function addStudent() {
    const add = await client.query("INSERT INTO students (name) VALUES ('Ajala') RETURNING *");
    console.log(add.rows);
}

async function updateStudent() {
    const update = await client.query("UPDATE students SET name = 'Tunde' WHERE id = 9");
    console.log(update);
}

async function deleteStudent() {
    const remove = await client.query("DELETE FROM students WHERE id = 6 RETURNING *");
    console.log(remove.rows);
}
// let's get our students and then stop the node process RETURNING *
// when we start using express, process.exit will be a response from the server instead
updateStudent().then(() => process.exit(0));
