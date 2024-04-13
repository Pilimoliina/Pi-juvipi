var express = require('express');
var router = express.Router();
var product_addController = require('../controllers/product_addController');



router.get('/',product_addController.index);
router.get('/productadd',product_addController.index);


module.exports = router;