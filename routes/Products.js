const express = require('express');
const router = express.Router();

const productController = require('../controllers/Products');

router.get('/', productController.getProducts)

module.exports = router