const express = require('express');
const FilmesController = require('../controller/filmes.controller');
const router = express.Router()
const filmesController = new FilmesController;

router.get('/', filmesController.getFilmes);

router.get("/:id", filmesController.getFilmeById);

router.post("/adicionar", filmesController.createFilme);

router.put("/editar/:id", filmesController.editFilme);

router.delete("/deletar/:id", filmesController.deleteFilme);


module.exports = router;