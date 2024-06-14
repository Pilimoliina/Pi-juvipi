let mercadolibre = require("../database/models");

let usersController = {
    profile : function (req, res) {
           res.send('profile', {lista: mercadolibre.usuario,
                                 lista: mercadolibre.product  });

        let id = req.params.id
        mercadolibre.Usuario.findByPk(id)
        .then(function (resultado) {
          return res.send(resultado);
        }).catch(function (error) {
          return console.log(error); ;
        })
    },
    profile_edit : function (req, res) {
        // res.render('profile_edit', {lista: mercadolibre.usuario,
        //     lista: mercadolibre });
    },

};
module.exports = usersController;