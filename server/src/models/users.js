const connection = require('../db')
const mysql = require('mysql');
const bcrypt = require('bcrypt');

function getAllUsers(req, res) {
    const query = 'SELECT * FROM users';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).send('Error fetching users');
        } else {
            res.json(results);
        }
    });
}


function loginUser(username, password, callback) {
    const query = 'SELECT * FROM users WHERE username = ?';

    connection.query(query, [username], (err, results) => {
        if (err) return callback(err);

        if (results.length === 0) {
            return callback(null, false); // No user found
        }

        const user = results[0];

        // Compare hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) return callback(err);

            if (isMatch) {
                return callback(null, true); // Login successful
            } else {
                return callback(null, false); // Wrong password
            }
        });
    });
}


module.exports = {
    getAllUsers,
    loginUser
}