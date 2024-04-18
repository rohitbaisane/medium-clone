require('dotenv').config();
require('./db.js')
const cors = require('cors');
const express = require('express');


const startServer = () => {

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/', require('./routes/blog.js'));

    app.listen(3000, () => { console.log(`Server is listening`); });
}


startServer();