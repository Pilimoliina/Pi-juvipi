let product = require("../db/product")

const productController = {
    index: function(req,res){
        res.render('product', {title: 'product'});
    },
};

module.exports = productController;
