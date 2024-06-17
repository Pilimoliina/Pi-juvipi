let mercadolibre = require("../database/models");

let usersController = {
    profile: function (req, res) {
        res.render('profile', { lista: mercadolibre } );

        // let id = req.params.id
        // mercadolibre.Usuario.findByPk(id)
        //     .then(function (resultado) {
        //         return res.send(resultado);
        //     }).catch(function (error) {
        //         return console.log(error);;
        //     })
    },
    profileEdit: function (req, res) {
        res.render('profileEdit', {lista: mercadolibre});
    },
   
};
module.exports = usersController;