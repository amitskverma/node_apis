const express = require('express')
const app = express()
const db = require('./db' )

require('dotenv').config();
const port = process.env.PORT
console.log(process.env.DB_CONNECTION_STRING);
console.log(port);

const bodyParser = require('body-parser')
app.use(bodyParser.json())  

const personRoutes = require('./router/personRoutes')


app.use('/', personRoutes)
app.listen(process.env.PORT || 3000, 
() => console.log('Server is running on port 3000'));