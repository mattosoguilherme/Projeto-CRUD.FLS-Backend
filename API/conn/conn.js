const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect('mongodb://localhost:27017/filmes',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log('Mongo DB conectado')).catch( err => console.logo('Erro de conexão'))
};

module.exports = conn;