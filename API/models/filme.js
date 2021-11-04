const Mongoose = require('mongoose');

const FilmeModel = new Mongoose.Schema({
    nome: {type:String, required:true},
    imgURL: {type: String, required:true},
    genero: {type: String, required:true},
    nota: {type: Number, required:true},
    dataCriacao: {type: Date, default: Date.now()}
});

const filme = Mongoose.model('filmes', FilmeModel)

module.exports = filme;