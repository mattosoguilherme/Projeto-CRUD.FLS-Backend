const express = require('express');

router = express.Router();

const filmes = [
    {
        id:1,
        nome:"filme",
        imgURL:"url da imagem",
        genero:"genero do filme",
        nota:"de 0 a 10"
    },
    {
        id:2,
        nome:"filme2",
        imgURL:"url da imagem",
        genero:"genero do filme",
        nota:"de 0 a 10"
    },
    {
        id:3,
        nome:"filme3",
        imgURL:"url da imagem",
        genero:"genero do filme",
        nota:"de 0 a 10"
    },
    {
        id:4,
        nome:"filme4",
        imgURL:"url da imagem",
        genero:"genero do filme",
        nota:"de 0 a 10"
    }
];


const getFilmesById = (id) => filmes.find((filme) => filme.id === id);


router.get("/", (req,res) => {
    res.send(filmes)
});

router.get("/:id",(req,res) => {
    const id = req.params.id;
    const filme = getFilmesById(id);
    
    if (!filme){
        res.send("Filme não encontrado!")
    }
    res.send(filme) 
});

module.exports = router;