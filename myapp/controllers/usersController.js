let product = require("../db/dataBase")

let usersController = {
    profile : function (req, res) {
        res.render('profile', {title: 'profile'});
    },
    profile_edit : function (req, res) {
        res.render('profile_edit', {title: 'profile_edit'});
    },

};
module.exports = usersController;