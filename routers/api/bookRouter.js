const express = require('express');
const router = express.Router();
const Book = require('../../models/bookModel');
const Author = require('../../models/authorModel');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    await res.json(books);
  } catch (err) {
    res.status(500).send("server error");
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    await res.json(book);
  } catch (err) {
    res.status(500).send("server error");
  }
});

router.post('/', async (req, res) => {
  try {
    const {name, genre, authorId} = req.body;
    const newBook = new Book({name, genre, authorId});
    const book = await newBook.save();
    await res.json(book);
    const author = await Author.findById(authorId);
    author.books = [...author.books, book];
    await author.save();
  } catch (err) {
    res.status(500).send("server error!!!");
  }
});

module.exports = router;