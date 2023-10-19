const express = require('express');
const controller = require('../controllers/postsController');

const router = express.Router();

// @GET - /posts
router.get('/', controller.getPosts);

// @GET - /posts/:id/detail
router.get('/:id/detail', controller.getDetail);

module.exports = router;