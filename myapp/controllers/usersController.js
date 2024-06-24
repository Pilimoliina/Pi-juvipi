const { mergeDefaults } = require("sequelize/lib/utils");
let mercadolibre = require("../database/models");

let usersController = {
    profile: function (req, res) {
        // res.render('profile', { lista: mercadolibre });
        let id = req.params.id
        mercadolibre.Usuario.findByPk(id, {
            include: [
                {
                    association: "comentarios",
                    order: [['createdAt', 'DESC']]
                },
                {
                    association: "productos",
                    include: [{ association: "comentarios" }],
                    order : [['createdAt', 'DESC']]
                }
            ],
            order: [['createdAt', 'DESC']]
            // order: [[{ model: mercadolibre.Producto }, 'createdAt', 'DESC']]
        })

            .then(function (resultado) {
                
                return res.render("profile", { usuario: resultado })

            }).catch(function (errores) {
                return console.log(errores);
            })
            

    },
    profileEdit: function (req, res) {if (req.session.user != undefined) {

        let id_url = req.params.id;
        const userId_session = res.locals.user.id_usuario;

        if (id_url == userId_session) {

            mercadolibre.Usuario.findByPk(id_url)
                .then(function (resultado) {
                    return res.render("profileEdit", { lista: resultado })

                }).catch(function (errores) {
                    return console.log(errores);;
                })

        } else {
            return res.send('Solo puedes editar tu usuario, vuelve al inicio')
        }
    } else {
        return res.redirect('/user/login');
    }

    },profileUpdate:function (req, res) {
        let form = req.body;
        let idUsuario = res.locals.user.usuariosId;
        let contrasenaSession = res.locals.user.contrasenia;
        let errors = validationResult(req);

        if(form.contraseña == ""){
             contrasenaNueva = contrasenaSession;
        }else{
             contrasenaNueva = bcrypt.hashSync(form.contraseña, 10)
        }

        let filtro = {
            where: [{ usuariosId: idUsuario }]
        };

        let nuevoProducto = {
            nombre_usuario: form.nombre_usuario,
            email: form.email,
            contrasenas: contrasenaNueva,
            fecha: form.fecha,
            dni: form.dni,
            foto: form.foto
        }

        if (errors.isEmpty()) {

        mercadolibre.usuarios.update(nuevoProducto, filtro)
            .then((result) => {
                return res.redirect("/");
            }).catch((err) => {
                return console.log(err);
            });

        }else {

        mergeDefaults.Usuario.findByPk(idUsuario)
        .then(function (resultado) {
            return res.render('profileEdit', {
                errors: errors.mapped(),
                old: req.body,
                lista: resultado });

        }).catch(function (errores) {
            return console.log(errores);;
        })

};
},
   
};
module.exports = usersController;