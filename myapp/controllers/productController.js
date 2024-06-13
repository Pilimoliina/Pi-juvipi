const mercadolibre = require("../database/models");
  const lista2 = {
      product_add:[]
  };
const productController = {
    index: function (req, res) {
        mercadolibre.Producto.findAll({
            include: [
                { association: "Usuario" },
                { association: "Comentario" }
            ]
        })

            .then(function (resultado) {

                return res.render("index", { lista: resultado })

            }).catch(function (errores) {

                return console.log(errores);
            })
    },
    
    product_add: function (req, res) {
        res.render('productAdd', { lista: mercadolibre });
    },
    product: function (req, res) {
        res.render('product', { lista: mercadolibre });
    },
    search: function (req, res) {
        res.render('search', { lista: mercadolibre.product });
    },

    productInfo: function (req, res) {
        let Id = req.params.id
        mercadolibre.Producto.findByPk(Id, {
            include: [
                { association: "Usuario" },
                {
                    association: "Comentario",
                    include: [{ association: "Usuario" }]
                }]
        })

            // .then(function (resultado) {
            //     return res.render("productos", { lista: resultado })

            // }).catch(function (errores) {
            //     return console.log(errores);;

            // })
    },

    search: function (req, res, next) {
        return res.render("productos", { lista: productos })
    }
};

module.exports = productController;

