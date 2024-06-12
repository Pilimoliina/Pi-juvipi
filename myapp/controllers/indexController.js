const mercadolibre = require("../database/models");


let indexController = {
    index: function (req, res) {
       mercadolibre.Producto.findAll({ include: [
            { association: "usuarios" },
            { association: "comentarios" },
         ] }
          )
        
     

    //         //return res.render('index', {lista: mercadolibre.product});
    // .then(function (resultado) {
    //             return res.send({ lista: resultado })
    // }).catch(function (errores) {
    //             return console.log(errores);
    // })
    },
     login: function (req, res) {
       //  res.render('login', { title: 'login' });
     },
    register: function (req, res) {
      //   res.render('register', { title: 'register' });
     },
};

module.exports = indexController;