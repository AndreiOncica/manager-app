require('dotenv').config();
const mysql = require('mysql2');

// Create the database connection
const connection = mysql.createConnection(process.env.DATABASE_URL);

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = connection