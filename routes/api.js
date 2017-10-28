var express = require('express');
var router = express.Router();
var Word = require('../models/word.js');

module.exports = router;

router.get('/word', function(req, res, next) {
  Word.find({}, function(err, words) {
    res.json(words);
  });
});

module.exports = router;
