const { Mongoose } = require('mongoose');

const conn = () => {
    Mongoose.connect('mongodb://localhost:27017/filmes',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).them(()=>console.log('Mongo DB conectado')).catch( err => console.logo('Erro de conexão'))
};

module.exports = conn;