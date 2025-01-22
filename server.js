const express = require('express');
const app = express();
const db = require('./db'); // Assuming you use this module
const cors = require('cors');
require('dotenv').config();
app.use(cors());

const bodyParser = require('body-parser')
app.use(bodyParser.json())  

const personRoutes = require('./router/personRoutes');
app.use('/', personRoutes); 

app.listen(process.env.PORT || 3000, () => { 
  console.log(`Server is running on port ${process.env.PORT || 3000}`); 
});