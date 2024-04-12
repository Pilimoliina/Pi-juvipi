let product = require('../db/product');

let searchController = {
    index : function (req, res) {
        res.render('search', {title: 'search'});
    }


};

module.exports = searchController;