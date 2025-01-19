const mongoose = require('mongoose');

// define the mongoDB URL
const mongoURL = 'mongodb://localhost:27017/test_DB';


// connect to the mongoDB database
mongoose.connect(mongoURL);

 const db = mongoose.connection;

 db.on('connected', () => {
     console.log('Connected to the database');
 }  );  

 db.on('error', (error) => {
    console.log('An error occurred: ', error);  
    });

db.on('disconnected', () => { 
    console.log('Disconnected from the database');
});
    
module.exports = db;
