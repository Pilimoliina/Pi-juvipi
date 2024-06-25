const mercadolibre = require("../database/models");
const op = mercadolibre.Sequelize.Op;
const { validationResult } = require('express-validator');

const productController = {

    index: function (req, res) {

        mercadolibre.Producto.findAll({
            include: [
                { association: "Comentario" },
                { association: "Usuario" }
            ],
            order: [['createdAt', 'DESC']]
        })
            .then(function (resultado) {
                return res.render('index', { lista: resultado });

            }).catch(function (errores) {
                return console.log(errores);

            })
    },



    productAddPage: function (req, res) {
        res.render('productAdd', { lista: mercadolibre });
    },
    product: function (req, res) {
        res.render('product', { lista: mercadolibre });
        //return res.redirect ("/")
    },

    comment: function(req, res) {
        let form = req.body
        mercadolibre.Comentario.create({
            usuarioId: form.usuariosId,
            productoId: form.productosId,
            textoComentario: form.textoComentario,
            // createdAt: new Date()
        })
        .then (function (result) {
            return res.redirect("/product/" + form.productoId);
        })
        .catch (function (errors) {
            return console.log(errors);
        })
    },

    search: function (req, res) {
        res.render('search', { lista: mercadolibre.product });
    },


    productInfo: function (req, res) {

        let session = req.session.users
        let id = req.params.id
        mercadolibre.Producto.findByPk(id, {
            include: [
                { association: "usuarios" },
                {
                    association: "comentarios",
                    include: [{ association: "usuarios" },
                    { association: 'productos' }
                    ]
                }
            ],
            order: [['createdAt', 'DESC']]
            // order: [[{model: mercadolibre.comentarios}, 'createdAt' , 'DESC']]
        })


            .then(function (resultado) {
                return res.render("product", { lista: resultado, session: session })
            }).catch(function (errores) {
                return console.log(errores);;
            })
    },

    delete: function (req, res) {
        if (res.locals.users == undefined) {
            return res.send("No podes borrar este producto porque no estas logueado")
        } else {

            let id_usuarioForm = req.body.usuariosId;
            let id_usuarioSession = res.locals.user.usuariosId;


            if (id_usuarioForm == id_usuarioSession) {
                let idEliminar = req.body.productosId;

                const filtro = {
                    where: { productosId: idEliminar }
                };

                mercadolibre.comentarios.destroy(filtro)
                    .then((result) => {

                        mercadolibre.productos.destroy(filtro)
                            .then((result) => {
                                return res.redirect("/");

                            }).catch((error) => {
                                return console.log(error);
                            });

                    }).catch((error) => {
                        return console.log(error);
                    });

            } else {
                return res.send('No se puede eliminar si no es tu producto')
            }


        }
    },
    showFormUpdate: function (req, res) {
        if (req.session.users != undefined) {
            let id = req.params.id;
            const userId = res.locals.user.usuariosId;

            mercadolibre.Producto.findByPk(id)
                .then((result) => {
                    if (result.usuariosId != userId) {
                        return res.send("Tu usuario no creo este producto por lo tanto no podes editarlo.")
                    } else {
                        return res.render("productEdit", { productos: result });
                    }
                }).catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.redirect('/user/login');
        }

    }, 
    update: function (req, res) {
        let form = req.body;
        let id = form.id
        let errorrs = validationResult(req);

        if (errorrs.isEmpty()) {
            let nuevoProducto = {
                fotoProducto: '/images/products/' + form.fotoProducto,
                nombreProducto: form.nombreProducto,
                descripcion: form.descripcion,
            }

            let filtro = {
                where: [{ productosId: form.id }]
            };

            mercadolibre.Producto.update(nuevoProducto, filtro)
                .then((result) => {
                    return res.redirect("/");
                }).catch((err) => {
                    return console.log(err);
                });

        } else {

            mercadolibre.productosId.findByPk(id)
                .then(function (resultado) {
                    return res.render('productEdit.ejs', {
                        errors: errorrs.mapped(),
                        old: req.body,
                        productos: resultado
                    });

                }).catch(function (errores) {
                    return console.log(errores);;
                })



        };
    },
    

    search: function (req, res, next) {
        let lk = req.query.search;
        let filtrado = {
            where: {
                [op.or]:
                    [
                        { nombreProducto: { [op.like]: `%${lk}%` } },
                        { descripcion: { [op.like]: `%${lk}%` } }
                    ]
            },
            order: [
                ['createdAt', 'DESC']
            ],
            include: [
                { association: "Usuario" },
                { association: "Comentario" }
            ]

        };
        mercadolibre.Producto.findAll(filtrado)
            .then(function (resultado) {
                if (resultado.length == 0) {
                    return res.render("search", { resultado: [], message: "No hay resultados para su criterio de búsqueda" });
                    // return res.send('No hay resultados para su criterio de búsqueda');

                } else {
                    return res.render('search', { resultado: resultado });
                }


            }).catch(function (error) {
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

    },

    

    

};

module.exports = productController;