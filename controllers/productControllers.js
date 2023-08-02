const productModel = require('../models/productModels');

const controller = {
    getList: (req, res) => {
        const products = productModel.findAll();

        res.render('productList', { products }); // Es un atajo, hacerlo así es lo mismo que poner {products: products}
    },

    getDetail: (req, res) => {
        const productId = req.params.id;

        const selectedProduct =  productModel.findById(productId);

        res.render('productDetail', { product: selectedProduct });
    },

    getCreate: (req, res) => {
        res.render('createProduct');
    },

    postProduct: (req, res) => {
        console.log(req.body);

        const newProduct = {
            title: req.body.title,
            price: req.body.price,
            talle: req.body.talle,
        }

        const createdProduct = productModel.createProduct(newProduct);

        res.redirect('/products/' + createdProduct.id + '/detail');

        // Desde los POST no renderizamos vistas, solo redireccionamos
        //res.redirect('/products');
    }
}

module.exports = controller;