var express = require('express');
var router = express.Router();
var Word = require('../models/word.js');

module.exports = router;

router.get('/', function(req, res, next) {
  Word.find({}, function(err, words) {
    res.render('word', { 'words': words });
  });
});
