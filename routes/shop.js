const express = require('express');

const shopController = require('../controllers/shop');

const path = require('path');

const router = express.Router();

// const rootDir = require('../helper/path');
// const adminData = require('./admin');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);

router.post('/cart', shopController.postCart);

module.exports = router;
