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
];

let validationComentario= [
    body('comentario')
    .notEmpty().withMessage('Ingrese un comentario')
    .bail()
    .isLength({ min: 3 }).withMessage('Su comentario debe tener al menos 3 caracteres'),
];


router.get('/',productController.product);
router.get('/productAdd', productController.productAddPage);
router.get('/search', productController.search);
router.get('/id/:id', productController.productInfo);

router.post('/productAdd', validationsProducto, productController.store);

router.post('/', validationComentario, productController.comment);

module.exports = router;
