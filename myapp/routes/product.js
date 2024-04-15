var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');



router.get('/',productController.index);
router.get('/product',productController.product);
router.get('/product_add', productController.product_Add);
router.get('/search', productController.search);


module.exports = router;
