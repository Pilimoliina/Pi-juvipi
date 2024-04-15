const product = require("../db/product");

const product_addController = {
    index: function (req, res) {
        res.render('product_add', {title: 'product_add'});
    },

};
module.exports = product_addController;