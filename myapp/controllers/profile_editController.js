let product = require("../db/product");

let profile_editController = {
    index : function (req, res) {
        res.render('profile-edit', {title: 'profile-edit'});
    }


};

module.exports = profile_editController;