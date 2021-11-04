const express = require('express');
const FilmesController = require('../controller/filmes.controller');
const router = express.Router()
const filmesController = new FilmesController;

router.get('/', filmesController.getFilmes);


module.exports = router;