// Initialize an Express application
const express = require('express');
const app = express();
const { connection } = require('./db');
const cors = require("cors");
const {loginUser} = require('./models/users')

// Body parsing middleware
app.use(cors());
app.use(express.json()); // Parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    loginUser(username, password, (err, isMatch) => {
        if (err) {
            return res.status(500).json({ error: "An error occurred during login." });
        }

        if (isMatch) {
            return res.status(200).json({ message: "Login successful!" });
        } else {
            return res.status(401).json({ error: "Invalid username or password." });
        }
    });
});
module.exports = app;