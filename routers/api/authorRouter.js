const express = require('express');
const router = express.Router();
const Author = require('../../models/authorModel');

router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    await res.json(authors);
  } catch (err) {
    res.status(500).send("server error");
  }
});

router.get('/:id', async (req, res)=>{
  try {
    const author = await Author.findById(req.params.id);
    await res.json(author);
  }catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;