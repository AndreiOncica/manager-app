// Import the necessary modules
const express = require('express');
const app = require('./app')
// Accessing environment variables
const PORT = process.env.PORT || 3000;
const { getAllUsers, loginUser } = require('./models/users')

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Route to fetch all users
app.get('/users', getAllUsers);
// app.post('/login', loginUser)

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
