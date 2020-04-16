const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  //console.log('shop.js', adminData.product);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = Product.fetchAll((products) => {
    res.render('shop/product-list', {
        prods: products,
        doctTitle: 'Product List',
        path: '/products'
      }
    );
  });

};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: 'Product Title'
    });
  });

}

exports.getIndex = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/index', {
        prods: products,
        doctTitle: 'Shop',
        path: '/'
      }
    );
  });

};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path:'/cart',
    pageTitle: 'Cart Page'
  });
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  })
  res.redirect('/cart');
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path:'/checkout',
    pageTitle: 'Checkout Page'
  });
}
