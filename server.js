import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
//import dotenv from 'dotenv';
import { router } from './router/personRoutes.js';
import './db.js';

//dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});