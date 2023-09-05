const express = require('express');
const controllers = require('../controllers/jugadorController');

const router = express.Router();

// @GET - /jugadores
router.get('/', controllers.getAll);

// @GET - /jugadores/:id/detail
router.get('/:id/detail', controllers.getDetail);

// @GET - /jugadores/:id/edit
router.get('/:id/edit', controllers.getEdit);

// @GET - /jugadores/create
router.get('/create', controllers.getCreate);

// @POST - /jugadores
router.post('/', controllers.createOne);

// @PUT - /jugadores/:id/edit
router.put('/:id/edit', controllers.editOne)

// @DELETE - /jugadores/:id/delete
router.delete('/:id/delete', controllers.deleteOne)

module.exports = router;