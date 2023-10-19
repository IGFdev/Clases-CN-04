const express = require('express');
const controllers = require('../controllers/clubController');

const router = express.Router();

// @GET - /clubes
router.get('/', controllers.getAll);

// @GET - /clubes/:id/detail
router.get('/:id/detail', controllers.getDetail);

module.exports = router;