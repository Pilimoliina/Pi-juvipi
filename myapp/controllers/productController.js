const mercadolibre = require("../database/models");

const productController = {
    
    index: function (req,res) {
    let id = req.params.id
        let func = {
            include: [
                {association: "Comentario", include: [{association: "Usuario"}]},
                {association: "Usuario"}
]
        }

        mercadolibre.Producto.findByPk(id, func)

        .then(function(resultado) {
            return res.render("index",{mercadolibre: resultado})

        }).catch(function(errores) {
                    return console.log(errores);
                })
        },
    
    product_add: function (req, res) {
   res.render('productAdd', { lista: mercadolibre });
    },
    product: function(req,res){
        res.render('product', { lista: mercadolibre});
    },
    search: function (req, res) {
        res.render('search',{ lista: mercadolibre.product});
    },

productInfo: function (req,res) {
    let Id = req.params.id
    mercadolibre.Producto.findByPk(Id, {
        include: [
            {association: "Usuario"},
            {association: "Comentario",
                include: [{association: "Usuario"}]
            }]
    })


            .then(function (resultado) {
               return res.render("productos", { lista: resultado })

             }).catch(function (errores) {
                return console.log(errores);;

             })
    },

    search: function(req,res, next) {
        return res.render("search", {lista: mercadolibre})
    }
};

module.exports = productController;

