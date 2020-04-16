const express = require('express');

const eduController = require('../controllers/edu');

const path = require('path');

const router = express.Router();

// const rootDir = require('../helper/path');
// const adminData = require('./admin');

router.get('/', eduController.getIndex);
// router.get('/products', eduController.getProducts);
router.get('/products/:productId', eduController.getProduct);
router.get('/cart', eduController.getCart);
// router.get('/checkout', eduController.getCheckout);

router.post('/cart', eduController.postCart);
router.post('/cart-delete-item', eduController.postCartDeleteProduct);

module.exports = router;
