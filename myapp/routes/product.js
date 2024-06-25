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

let validationUpdate= [
    body('fotoProducto')
    .notEmpty()
    .withMessage('Debes ingresar una imágen del producto')
    .bail(),

    body('nombreProducto')
    .notEmpty()
    .withMessage('Debes ingresar el nombre del producto')
    .bail(),

    body('descripcion')
    .notEmpty()
    .withMessage('Debes ingresar una descripción del producto')
    .bail(),
];

router.get('/',productController.product);
router.get('/productAdd', productController.productAddPage);
router.get('/search', productController.search);
router.get('/:id', productController.productInfo);
router.get("/productEdit/:id", productController.productEdit);
router.post("/productEdit/", validationsProducto, productController.update);
router.get("/productDelete/:id", productController.productDelete);

router.post('/productAdd', validationsProducto, productController.store);

router.post('/', validationComentario, productController.comment);

router.get('/edit/:id', productController.showFormUpdate);

router.post("/update", validationUpdate, productController.update);
router.post("/comment", validationComentario, productController.comment)

module.exports = router;
