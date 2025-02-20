import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// define the mongoDB URL
const mongoURL = process.env.DB_CONNECTION_STRING;

// connect to the mongoDB database
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to the database to online cluster');
});

db.on('error', (error) => {
    console.log('An error occurred: ', error);
});

db.on('disconnected', () => {
    console.log('Disconnected from the database');
});

export { db };
