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


let validacionesEdit = [
  body("email")
      .notEmpty()
      .withMessage("Debes completar el mail")
      .isEmail()
      .withMessage("Ingrese un mail válido")
      .custom(function (value, {req}) {
          
          if( value != req.session.users.email ) {
              return mercadolibre.usuario.findOne({
                  where: {email: value}
              })
              .then(function (resultado) {
                  if(resultado) {
                      throw new Error("El mail ingresado ya pertenece a otro usuario")
                  }
              })
          } else {
              return true;
          }
      }),
      body ("usuario")
          .notEmpty()
          .withMessage("Ingrese un nombre de usuario")
          .bail(),
      body("password")
          .notEmpty().withMessage("La contraseña debe tener al menos 4 caracteres")
          .isLength({ min: 4 })


]

router.get('/',usersController.profile);
router.get('/profile',usersController.profile);
router.get('/:id',usersController.profile);
router.get('/profileEdit/redirect',usersController.profileEdit);
router.post('/profileEdit/:id/redirect', validacionesEdit,  usersController.profileUpdate);

//router.post('/profile/update', validationsProfileUpdate, usersController.profileUpdate);



module.exports = router;
