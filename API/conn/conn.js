const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect("mongodb+srv://blumer_carioca:blumer007@cluster0.ohlbp.mongodb.net/filmes?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>console.log('Mongo DB conectado')).catch( err => console.logo('Erro de conexão'))
};

module.exports = conn;