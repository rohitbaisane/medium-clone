require('dotenv').config();
require('./db.js')
const express = require('express');

const startServer = () => {

    const app = express();
    app.listen(3000, () => { console.log(`Server is listening`); });
}


startServer();