const mercadolibre = require("../db/dataBase");
let product = require("../db/dataBase")

const productController = {
    product_add: function (req, res) {
        res.render('product_add', {lista: mercadolibre.product_add});
        
    },
    product: function(req,res){
        res.render('product', {lista: mercadolibre.product});
    },
    search: function (req, res) {
        res.render('search');
    },
};

module.exports = productController;
