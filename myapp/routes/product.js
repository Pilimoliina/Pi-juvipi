var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/id/:id',productController.product);
router.get('/productAdd', productController.productAdd);
router.get('/search', productController.search);


module.exports = router;
