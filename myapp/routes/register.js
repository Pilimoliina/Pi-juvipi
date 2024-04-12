var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');



router.get('/',registerController.index);


module.exports = router;