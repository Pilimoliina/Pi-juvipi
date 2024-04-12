let product = require("../db/product")

let product_addController = {
    index : function (req, res) {
        res.render('product_add', {title: 'product_Add'});
    }

};
module.exports = product_addController;