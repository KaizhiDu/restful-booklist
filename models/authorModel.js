const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  books: []
});

module.exports = Author = mongoose.model('Author', authorSchema);