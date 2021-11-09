const Mongoose = require('mongoose');

const FilmeModel = new Mongoose.Schema({
    nome: {type:String, required:true},
    imgURL: {type: String, required:false},
    genero: {type: String, required:true},
    nota: {type: Number, required:true},
    dataCriacao: {type: Date, default: Date.now()}
});

const filme = Mongoose.model('Filmes', FilmeModel)

module.exports = filme;