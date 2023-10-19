const express = require('express');
const controller = require('../../controllers/api/apiClubController');

const router = express.Router();

// @GET - /api/clubes
router.get('/', controller.getClubes);

// @GET - /api/clubes/:id/detail
router.get('/:id/detail', controller.getClubById);

// @POST - /api/clubes
router.post('/', controller.postClub);

module.exports = router;