const express = require('express');
const router = express.Router();

const product_addController = require('../controllers/product_addController');

router.get('/', product_addController.index);
router.get('/product_add', product_addController.index);

module.exports = router;