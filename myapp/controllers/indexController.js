const mercadolibre = require("../database/models");

const indexController = {
    index: function (req, res) {
      let func = {
        include: [
            {association: "usuarios"},
            {association: "comentarios"},

        ]
    }
       
      mercadolibre.Producto.findAll(func)
             //return res.send({  lista : resultado});

     .then(function (resultado) {
          return res.render("index", {lista: resultado})

     }).catch(function (errores) {
          return console.log(errores);
     })
       res.render("index", { lista: mercadolibre })
    },

        login: function (req, res) {
            res.render('login', { title: 'login' });
        },
       register: function (req, res) {
           res.render('register', { title: 'register' });
       },
};

module.exports = indexController;



