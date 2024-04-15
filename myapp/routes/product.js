var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/',productController.product);
router.get('/product_add', productController.product_add);
router.get('/search', productController.search);


module.exports = router;
