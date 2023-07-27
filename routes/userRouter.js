const express = require('express');
const router = express.Router();
const userController = require ('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);

// /profile/15/detail?edad=17&nombre=asdfasdf
router.get('/profile/:id/products', userController.profile);

router.get('/profile/detail', (req, res) => {
    res.send('asdfasdf')
})



module.exports = router;
