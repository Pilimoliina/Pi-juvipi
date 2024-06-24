var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
const { body } = require("express-validator");
var Producto = require('../database/models')

let validationsProducto = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes ingresar una foto para el nuevo producto")
        .bail(),
    body("nombre")
        .notEmpty()
        .withMessage("Debes ingresar un nombre para el nuevo producto")
        .bail(),
    body("descripcion")
        .notEmpty()
        .withMessage("Debes ingresar una descripcion para el nuevo producto")
        .bail()
]

router.get('/',productController.product);
router.get('/productAdd', productController.productAddPage);
router.get('/search', productController.search);
router.get('/id/:id', productController.productInfo);

router.post('/productAdd', validationsProducto, productController.store);

module.exports = router;
