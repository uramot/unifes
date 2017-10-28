var express = require('express');
var router = express.Router();
var Word = require('../models/word.js');

router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
  Word.create(req.body);
  res.render('form');
});

module.exports = router;
