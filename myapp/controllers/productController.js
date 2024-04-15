let product = require("../db/dataBase")

const productController = {
    product_add: function (req, res) {
        res.render('product_add', {title: 'product_add'});
    },
    product: function(req,res){
        res.render('product', {title: 'product'});
    },
    search: function (req, res) {
        res.render('search', {title: 'search'});
    }
};

module.exports = productController;
