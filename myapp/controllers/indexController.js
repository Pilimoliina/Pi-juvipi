const mercadolibre = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");






let indexController = {
 index: function (req, res) {
   mercadolibre.Producto.findAll({
     include: [
       { association: "usuarios" },
       { association: "comentarios" },


     ]
   })


   //return res.send({ lista: mercadolibre.product });
    .then(function (resultado) {
     return res.render("index", {lista: resultado})


   }).catch(function (errores) {
     return console.log(errores);
   })
   //res.send({lista: mercadolibre })
},


     login: function (req, res) {
          res.render('login', { title: 'login' });
      },
     register: function (req, res) {
       res.render('register', { title: 'register' });
      },
      store: function (req, res) {
       let error = validationResult(req);
       if (error.isEmpty()) {


           let form = req.body;


           let numeroD = form.numeroD
           if (numeroD === ''){
           numeroD = 0
           }


           let fechaN = form.fechaN
           if (fechaN === ""){
           fechaN = 0
           }


           let usuario = {
             nombre: form.nUsuario,
             usuario: req.body.nUsuario,
             email: req.body.email,
             contrasenia: bcrypt.hashSync(req.body.Contra, 10),
             fechaNacimiento: fechaN,
             numeroDocumento: numeroD,
             foto: form.perfil
           };


           mercadolibre.Usuario.create(usuario)
               .then(function(resultado) {
                   return res.redirect('/login');
               })
               .catch(function(error) {
                   return console.log(error);
               });




       } else {
           res.render('register', {error: error.mapped(), old: req.body})
           }
       }


};


module.exports = indexController;
