//let product = require("../db/product");

let registerController = {
    index : function (req, res) {
        res.render('register', {title: 'register'});
    },
};

module.exports = registerController;