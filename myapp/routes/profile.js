var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profileController');


router.get('/',profileController.index);
router.get('/profile',profileController.index);


module.exports = router;