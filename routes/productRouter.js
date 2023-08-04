const express = require('express');
const productControllers = require('../controllers/productControllers');
const multer = require('multer');

const router = express.Router();


// creamos un storage de multer
// seteamos el destination y el filename (dónde se guarda la imagen, y con qué nombre)
// inicializamos multer pasándole el storage que creamos
// pasamos este multer como segundo parámetro al router.post

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// @GET - /products
router.get('/', productControllers.getList);

// @GET - /products/:id/detail -> /products/5/detail
router.get('/:id/detail', productControllers.getDetail);

// @GET - /products/create
router.get('/create', productControllers.getCreate);

// @POST - /products
router.post('/', upload.any('img'), productControllers.postProduct);

// @GET - /products/:id/edit
router.get('/:id/edit', productControllers.getEdit);

// @DELETE - /products/:id/delete
router.delete('/:id/delete', productControllers.deleteProduct);

router.put('/:id/edit', productControllers.updateProduct);

module.exports = router;