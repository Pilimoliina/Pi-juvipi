const { mergeDefaults } = require("sequelize/lib/utils");
let mercadolibre = require("../database/models");
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");

let usersController = {
    profile: function (req, res) {
        let id = req.params.id
        mercadolibre.Usuario.findByPk(id, {
          include: [
            {
              association:  "comentarios",
            },
            {
              association: "productos",
              include: [{ association: "comentarios" }]
            }
          ],
          order: [["createdAt", "DESC"]]
        })
          .then(function (resultado){
            return res.render("profile" ,{ lista: resultado })
          }).catch(function (errores) {
            return console.log(errores);
          })
    
      },
    profileEdit: function (req, res) {

        let id = req.session.users.id;

        mercadolibre.Usuario.findByPk(id)
            .then(function (resultado) {
                return res.render("profileEdit", { user: resultado })

            }).catch(function (errores) {
                return console.log("-----------------ERROR-----------------\n", errores);
            })
    },
    profileUpdate:function (req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
        let form = req.body;
        let id = form.id;

        let usuario = {
            email: form.email,
            nombre: form.nombre,
            apellido: form.apellido,
            usuario: form.usuario,
            fechaNacimiento: form.fecha,
            numeroDocumento: form.documento,
            foto: form.fotoPerfil
        }

        if(form.password != '******') {
            usuario.contrasenia = bcrypt.hashSync(form.password, 12)
        }
        
        mercadolibre.Usuario.update(usuario, {
            where: {id: id}
        })
        .then(function (result) {
            return res.redirect("/");
        })
        .catch(function (error) {
            return console.log("ERROR:  ", error)
        })
        } else {
            console.log("Errores: ", errors)
            return res.render("profileEdit", {errors: errors.mapped(), old: req.body});
        }
},
   
};
module.exports = usersController;