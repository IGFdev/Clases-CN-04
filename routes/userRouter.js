const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

// @GET - /users/register
router.get('/register', userController.getRegister);
// @POST - /users/register
router.post('/register', userController.register);

// @GET - /users/login
router.get('/login', userController.getLogin);
// @POST - /users/login
router.post('/login', userController.login);

module.exports = router;