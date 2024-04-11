var express = require('express');
var router = express.Router();
var indexC = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', indexC.register)



module.exports = router;
