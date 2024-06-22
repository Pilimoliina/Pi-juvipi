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
        return res.render("index", { lista: resultado })


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
      if (numeroD === '') {
        numeroD = 0
      }


      let fechaN = form.fechaN
      if (fechaN === "") {
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
        .then(function (resultado) {
          return res.redirect('/login');
        })
        .catch(function (error) {
          return console.log(error);
        });




    } else {
      res.render('register', { error: error.mapped(), old: req.body })
    }
  },
  loginUser: (req, res) => {
    let form = req.body;

    let filtro = {
      where: [{ email: form.email }]
    };

    const bcrypt = require('bcryptjs');

    mercadolibre.Usuario.findOne(filtro)
      .then((resultado) => {
        if (resultado === null) {
          return res.send("No existe el mail " + form.email);
        }

        // Verificar si resultado.contrasenia está definido antes de comparar
        if (!resultado.contrasenia) {
          return res.send("No se encontró la contraseña para el usuario " + form.email);
        }

        // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
        let check = bcrypt.compareSync(form.contra, resultado.contrasenia);
        if (check) {
          req.session.user = resultado;

          // Guardar en cookie si el usuario tildó la checkbox "Recordarme"
          if (form.recordarme !== undefined) {
            res.cookie("usuariosId", resultado.id, { maxAge: 1000 * 60 * 15 });
          }
          return res.redirect("/");
        } else {
          return res.send("La contraseña es incorrecta");
        }

      }).catch((error) => {
        return console.log(error);
      });


  },
  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("usuariosId");
    return res.redirect('/');
  },
};


module.exports = indexController;




