const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017";

const conn = () => {
    console.log('Trying to connect to MongoDB...');
    mongoose.connect(DB_URL, {
        dbName: 'todo',
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

module.exports = conn