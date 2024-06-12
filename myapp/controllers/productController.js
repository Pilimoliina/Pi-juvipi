const mercadolibre = require("../database/models");


//  const lista2 = {
//      product_add:[]
//  };

const productController = {
    index: function (req,res) {
        mercadolibre.Producto.findAll({
            include: [
                {association: "usuario"},
                {association: "comentarios"}
]
})

    .then(function(resultado) {

        return res.render("index",{lista: resultado})

    }).catch(function(errores) {

        return console.log(errores);
})
},
    product_add: function (req, res) {
        //res.render('product_add', { lista: mercadolibre.product,
                                 //   lista2: mercadolibre.usuario});
    },
    product: function(req,res){
        //res.render('product', { lista: mercadolibre.product });
    },
    search: function (req, res) {
       // res.render('search',{ lista: mercadolibre.product});
    },
};

module.exports = productController;

