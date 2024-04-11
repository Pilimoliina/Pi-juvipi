const product = require("../db/product")

const productController = {
    product: function(req,res){
         res.render("product", {lista: product.lista});
    },
};

module.exports = productController;
