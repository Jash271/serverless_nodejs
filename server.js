const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const morgan = require('morgan');
const post_route = require('./Routes/Post');
const serverless = require('serverless-http');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
app.use('/api', post_route);

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports.handler = serverless(app);
