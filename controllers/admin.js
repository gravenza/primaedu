const Product = require('../models/products');

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir,'views', 'add-product.html'));
  //next();
  res.render('admin/add-product', {
    pageTitle: 'Admin Add Product',
    path: 'admin/add-product'
  });
};

exports.postProduct = (req, res, next) => {

  const title       = req.body.title;
  const description = req.body.description;
  const price       = req.body.price;

  const product = new Product(null, title, description, price);

  product.save();

  res.redirect('/products');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId; //get from route url;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');;
    }
    res.render('admin/edit-product', {
      pageTitle: 'Admin Product',
      path: 'admin/edit-product',
      editing: editMode,
      product: product
    });
  })

};

exports.postEditProduct = (req, res, next) => {
   const id = req.body.productId;
   const title = req.body.title;
   const description = req.body.description;
   const price = req.body.price;

   const updatedProduct = new Product(id, title, description, price);

   updatedProduct.save();
   res.redirect('/admin/products');
}

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render('admin/products', {
        prods: products,
        doctTitle: 'Admin Products',
        path: '/admin/products'
      }
    );
  });
}

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.productId;
  Product.deleteById(id);
  res.redirect('/admin/products');
}
