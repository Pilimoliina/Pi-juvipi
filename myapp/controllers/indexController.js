let product = require('../db/product');

let indexController = {
    index : function (req, res) {
        res.render('index', {title: 'index'});
    }


};

module.exports = indexController;