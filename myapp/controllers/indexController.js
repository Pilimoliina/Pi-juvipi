let product = require('../db/dataBase');

let indexController = {
    index : function (req, res) {
        res.render('index', {title: 'index'});
    },
    login : function (req, res) {
        res.render('login', {title: 'login'});
    },
    register : function (req, res) {
        res.render('register', {title: 'register'});
    },

};


module.exports = indexController;