const mercadolibre = require("../database/models");
const op = mercadolibre.Sequelize.Op;
const { validationResult } = require('express-validator');

const productController = {

    index: function (req, res) {

        mercadolibre.Producto.findAll({
             include: [
                  { association: "comentarios" },
                  { association: "usuarios" }
             ],
             order : [['createdAt', 'DESC']]
        })
             .then(function (resultado) {
                  return res.render('index', { lista: resultado });

             }).catch(function (errores) {
                  return console.log(errores);

             })
  },


    
    productAddPage: function (req, res) {
        res.render('productAdd', { lista: mercadolibre}); //modifique//
    },
    product: function(req,res){
       res.render('product', { lista: mercadolibre}); //modifique//
       //return res.redirect ("/")
    },
    search: function (req, res) {
        res.render('search',{ lista: mercadolibre.product});
    },

    comment: function(req, res){
        let errors = validationResult(req);

        let infoComment= req.body;
        const userId = res.locals.user.id_usuario;
        const prodId = infoComment.id;

        if (errors.isEmpty()) {
            let nuevoComment = {
                id_usuario: userId,
                id_producto: prodId,
                comentario: infoComment.comentario,

            };

            db.Comentario.create(nuevoComment)
            .then((result) => {
                return res.redirect("/product/id/" + infoComment.id);
            })
            .catch((error) => {
                return console.log(error);
            });


        } else {
            db.Producto.findByPk(prodId, {
                include: [
                    { association: "Usuario" },
                    { association: "Comentario" ,
                        include: [
                            { association: "Usuario" },
                            { association: 'Producto' }
                        ],

                        order: [['created_at', 'DESC']]
                    }
                ]
            })
            .then(function(result){
                return res.render('product', {
                    errors: errors.mapped(),
                    old: req.body,
                    lista: result,
                }
                );
            })
            .catch((error) => {
                return console.log(error);
            });

        }


    }, 

productInfo: function (req,res) {

    let session = req.session.users
    let id = req.params.id
    mercadolibre.Producto.findByPk(id, {
        include: [
            {association: "usuarios"},
            {association: "comentarios",
                include: [{association: "usuarios"},
                          {association: 'productos'}
                        ]
            }
        ],
        order: [['createdAt', 'DESC']]
       // order: [[{model: mercadolibre.comentarios}, 'createdAt' , 'DESC']]
    })


            .then(function (resultado) {
               return res.render("product", { lista: resultado, session : session})

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
                return res.render("search", { resultado: [], message: "No hay resultados para su criterio de búsqueda" });
                // return res.send('No hay resultados para su criterio de búsqueda');
    
            } else {
                return res.render('search', {resultado: resultado});        
            }
    
    
        }).catch(function(error) {
            return console.log(error);
        })
    
    },

    store: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
          let form = req.body
          let nuevoProducto = {
            usuariosId: req.session.users.id,
            fotoProducto: form.imagen,
            nombreProducto: form.nombre,
            descripcion: form.descripcion
          }
          console.log(nuevoProducto);
    
          mercadolibre.Producto.create(nuevoProducto)
            .then(
              function (results) {
                return res.redirect("/");
              }
            )
            .catch((err) => {
              return console.log(err);
            })
        } else {
          res.render("productAdd", { errors: errors.mapped(), old: req.body });
        }
    
      }
        
    };
    
    module.exports = productController;