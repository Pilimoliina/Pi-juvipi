let product = require("../db/product")

let profileController = {
    index : function (req, res) {
        res.render('proile', {title: 'profile'});
    }

};
module.exports = profileController;