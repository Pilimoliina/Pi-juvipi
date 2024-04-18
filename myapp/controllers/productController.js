const mercadolibre = require("../db/dataBase");

const lista2 = {
    product_add:[]
};

const productController = {
    product_add: function (req, res) {
        res.render('product_add', { lista: mercadolibre.product_add,
                                    lista2: mercadolibre.usuario});
    },
    product: function(req,res){
        res.render('product', { lista: mercadolibre.product });
    },
    search: function (req, res) {
        res.render('search',{ lista: mercadolibre.product});
    },
};

module.exports = productController;

