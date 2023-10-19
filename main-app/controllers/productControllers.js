const productModel = require('../models/productModels');

const controller = {
    getList: (req, res) => {
        const products = productModel.findAll();

        res.render('productList', { products }); // Es un atajo, hacerlo así es lo mismo que poner {products: products}
    },

    getDetail: (req, res) => {
        const productId = req.params.id;

        const selectedProduct = productModel.findById(productId);

        res.render('productDetail', { product: selectedProduct });
    },

    getCreate: (req, res) => {
        res.render('createProduct');
    },

    postProduct: (req, res) => {
        console.log(req.files);

        const filenames = req.files.map(file => file.filename);

        console.log(filenames)

        const newProduct = {
            title: req.body.title,
            price: req.body.price,
            img: filenames
        }

        const createdProduct = productModel.createProduct(newProduct);

        res.redirect('/products/' + createdProduct.id + '/detail');

        // Desde los POST no renderizamos vistas, solo redireccionamos
        //res.redirect('/products');
    },

    getEdit: (req, res) => {
        const product = productModel.findById(Number(req.params.id));

        res.render('editProduct', { product });
    },

    deleteProduct: (req, res) => {
        productModel.destroy(Number(req.params.id));

        res.redirect('/products');
    },

    updateProduct: (req, res) => {
        let updatedProduct = {
            id: Number(req.params.id)
        };

        updatedProduct = {
            ...updatedProduct,
            ...req.body
        };

        /* 
            const updatedProduct = req.body;
            updatedProduct.id = Number(req.params.id); 
        */

        productModel.updateProduct(updatedProduct);

        res.redirect('/products/' + updatedProduct.id + '/detail');
    }
}

module.exports = controller;