let product = require("../db/product");

let profile_editController = {
    index : function (req, res) {
        res.render('profile_edit', {title: 'profile_edit'});
    },


};

module.exports = profile_editController;