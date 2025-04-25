require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.get('/', (req, res) => {
    res.send('Server is running securely!');
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
