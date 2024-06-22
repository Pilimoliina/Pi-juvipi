var express = require('express');
var router = express.Router();


const indexController =
require('../controllers/indexController');


const mercadolibre = require('../database/models')
const { body } = require('express-validator');


let validation = [
   body('email')
       .notEmpty().withMessage('Ingrese su email').bail()
       .isEmail().withMessage('Ingrese un email valido')
       .custom(function (value, {req}) {
           return mercadolibre.Usuario.findOne({
               where: { email: req.body.email }
           })
               .then(function (usuario) {
                   if (usuario) {
                       throw new Error('El email que se ha ingresado ya existe')
                   }
               })
       }),
   body("nUsuario")
       .notEmpty().withMessage('Ingrese un nombre de usuario').bail(),
   body('Contra')
       .notEmpty().withMessage('Ingrese una contraseña').bail()
       .isLength({ min: 4 }).withMessage('La contraseña debe contener al menos 4 caracteres'),




];

/* GET home page. */
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.post('/register', validation, indexController.store);
router.post("/login", validation, indexController.loginUser)
router.post('/logout',  indexController.logout);

module.exports = router;
