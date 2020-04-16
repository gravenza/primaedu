const express = require('express');

const adminController = require('../controllers/admin');

// const path = require('path');
// const rootDir = require('../helper/path');

const router = express.Router();

router.get('/products', adminController.getProducts);
router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
//exports.routes = router;
//exports.product = products;
