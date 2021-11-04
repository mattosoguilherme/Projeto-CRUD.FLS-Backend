const FilmesService = require('../services/filmes.service');

const filmesService = new FilmesService;

class FilmesController {
    getFilmes = async (req,res) => {
        const filmes = await filmesService.findAll();
        res.send(filmes);
    };
};

module.exports = FilmesController;