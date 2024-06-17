var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');


/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/login',usersController.login);
router.get('/register',usersController.register);
router.get('/profile',usersController.profile);
router.get('/profileEdit',usersController.profileEdit);


module.exports = router;
