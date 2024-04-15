let product = require("../db/product")

let profileController = {
    index : function (req, res) {
        res.render('profile', {title: 'profile'});
    },

};
module.exports = profileController;