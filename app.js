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

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = app;