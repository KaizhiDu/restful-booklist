// import the keys.js
const keys = require('./keys');

const express = require('express');
// start express
const app = express();

// Now! we can use the req.body
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// connect database
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect(keys.mongoURI);
db.once('open', () => {
  console.log("database already connected ! ! ");
});

//set the router
const bookRouter = require('./routers/api/bookRouter');
app.use('/api/book', bookRouter);
const authorRouter = require('./routers/api/authorRouter');
app.use('/api/author', authorRouter);


// start the app
app.listen(5000, () => {
  console.log("port 5000 listening ...");
});