let mercadolibre = require("../db/dataBase")

let usersController = {
    profile : function (req, res) {
        res.render('profile', {lista2: mercadolibre.usuario,
                               lista: mercadolibre.product});

    },
    profile_edit : function (req, res) {
        res.render('profile_edit', {lista2: mercadolibre.usuario});
    },

};
module.exports = usersController;