const mercadolibre = require("../database/models");
const op = mercadolibre.Sequelize.Op;
const { validationResult } = require('express-validator');

const productController = {
    index: function (req, res) {
        mercadolibre.Producto.findAll({
             include: [
                  { association: "comentarios" },
                  { association: "usuarios" }
             ]
        })
             .then(function (resultado) {
                  return res.render('index', { lista: resultado });

             }).catch(function (errores) {
                  return console.log(errores);

             })
  },


    
    productAdd: function (req, res) {
        res.render('productAdd', { lista: mercadolibre.productAdd });
    },
    product: function(req,res){
        res.render('product', { lista: mercadolibre.product});
    },
    search: function (req, res) {
        res.render('search',{ lista: mercadolibre.product});
    },

productInfo: function (req,res) {
    let Id = req.params.id
    mercadolibre.Producto.findByPk(Id, {
        include: [
            {association: "usuarios"},
            {association: "comentarios",
                include: [{association: "usuarios"}]
            }]
    })


            .then(function (resultado) {
               return res.render("productos", { lista: resultado })

             }).catch(function (errores) {
                return console.log(errores);;

             })
    },

    search: function(req,res, next) {
        let lk = req.query.search;
        let filtrado = {
            where:{
            [op.or]:
                [
                    {nombreProducto: {[op.like]: `%${lk}%`}},
                    {descripcion: {[op.like]: `%${lk}%`}}
            ]},
            order: [
                ['createdAt', 'DESC']
            ],
            include: [
                {association: "usuarios"},
                {association: "comentarios"}
            ]
    
        };
        mercadolibre.Producto.findAll(filtrado)
        .then(function(resultado) {
            if (resultado.length == 0) {
                return res.send('No hay resultados para su criterio de búsqueda');
    
            } else {
                return res.render('search', {resultado: resultado});        
            }
    
    
        }).catch(function(error) {
            return console.log(error);
        })
    
    }
        
    };
    
    module.exports = productController;
    
    
