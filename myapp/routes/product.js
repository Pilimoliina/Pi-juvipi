var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');



router.get('/',productController.index);

// router.get('/product_add',function (rec,res,next) {
//     res.render('product_add');
    
// });

// router.get('/search-result',function (rec,res,next) {
//     res.render('search-result');
    
// });
module.exports = router;
