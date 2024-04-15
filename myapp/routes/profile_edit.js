var express = require('express');
var router = express.Router();
var profile_editController = require('../controllers/profile_editController');



router.get('/',profile_editController.index);
router.get('/profile_edit',profile_editController.index);


module.exports = router;