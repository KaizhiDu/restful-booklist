// import the keys.js
const keys = require('./keys');

const express = require('express');
// start express
const app = express();

// connect database
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect(keys.mongoURI);
db.once('open', () => {
  console.log("database already connected ! ! ");
});

//set the router
app.use('/api/book', (req, res) => {
  res.send({message: "我是book router"});
});

// start the app
app.listen(5000, () => {
  console.log("port 5000 listening ...");
});