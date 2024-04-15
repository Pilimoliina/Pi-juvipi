const product = require('../db/product');

const searchController = {
    index : function (req, res) {
        res.render('search', {title: 'search'});
    },
};

module.exports = searchController;