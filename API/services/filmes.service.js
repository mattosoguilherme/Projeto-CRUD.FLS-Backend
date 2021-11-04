const Filme = require("../models/filme");

class FilmeService {
    findAll = async () => await Filme.find();
}

module.exports = FilmeService ;