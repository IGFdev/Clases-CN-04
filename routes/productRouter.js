const express = require('express');
const productControllers = require('../controllers/productControllers');

const router = express.Router();

// @GET - /products
router.get('/', productControllers.getList);

// @GET - /products/:id/detail -> /products/5/detail
router.get('/:id/detail', productControllers.getDetail);

// @GET - /products/create
router.get('/create', productControllers.getCreate);

// @POST - /products
router.post('/', productControllers.postProduct);

module.exports = router;