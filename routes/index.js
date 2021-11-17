var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Hallo Welt Juhuuuuuuu 13:27 17.11.' });
});

module.exports = router;
