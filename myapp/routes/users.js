var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
const {body} = require('express-validator')
const { Op } = require('sequelize');
const bcrypt = require("bcryptjs");
const mercadolibre = require('../db/dataBase');


/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


let validationsProfileUpdate = [
  body('email')
      .notEmpty().withMessage('Debe ingresar un mail').bail()
      .isEmail().withMessage('Debe ingresar un mail valido')
      .custom(function (value, { req }) {
          return mercadolibre.usuario.findOne({
              where: {
                  email: req.body.email,
                  usuariosId: { [Op.ne]: req.body.userId }
              }

          })
              .then(function (user) {
                  if (user) {
                      throw new Error('El mail ingresado ya existe')
                  }
              })
      }),
  body("nombre_usuario")
      .notEmpty().withMessage('Debe ingresar un nombre de usuario').bail(),
  body('contraseña')
      .notEmpty().withMessage('Debe ingresar una contraseña').bail()
      .isLength({ min: 4 }).withMessage('La contraseña debe ser mas larga'),

];

router.get('/',usersController.profile);
router.get('/profile',usersController.profile);
router.get('/:id',usersController.profile);
router.get('/profileEdit',usersController.profileEdit);
router.get('/profileEdit/:id', usersController.profileEdit);

router.post('/profile/update', validationsProfileUpdate, usersController.profileUpdate);



module.exports = router;
