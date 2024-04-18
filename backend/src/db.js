const mongoose = require('mongoose');

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.p3yxj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log('database connection successfull');
    }).catch((err) => {
        console.log('database connection error');
    });

