// Import the necessary modules
const express = require('express');
const app = require('./app')
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
// Accessing environment variables
const PORT = process.env.PORT || 3000;

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
