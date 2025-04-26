// Initialize an Express application
const express = require('express');
const app = express();
const {connection} = require('./db')

// Body parsing middleware
app.use(express.json()); // Parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

 
module.exports = app;