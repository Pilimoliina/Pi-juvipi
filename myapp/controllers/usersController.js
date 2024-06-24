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
    profileEdit: function (req, res) {
        res.render('profileEdit', {lista: mercadolibre});
    },
   
};
module.exports = usersController;