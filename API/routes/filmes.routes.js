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
const getIndexById = (id) => filmes.findIndex((filme) => filme.id === id);

router.get("/", (req,res) => {
    res.send(filmes)
});

router.get("/:id",(req,res) => {
    const id = req.params.id -1;
    const filme = getFilmesById(id);
    
    if (!filme){
        res.send("Filme não encontrado!")
    }
    res.send(filme) 
});

router.post("/add",(req,res) => {
    const Newfilme = req.body;

    if(!Newfilme || !Newfilme.nome || !Newfilme.imgURL || !Newfilme.genero || !Newfilme.nota) {

        res.status(400).send({ message: 'Filme inválido. Estão faltando campos a serem preenchidos' });
        return;
    }
    Newfilme.id = filmes.length() + 1;
    filmes.push(Newfilme);

    res.status(201).send(`Novo filme: ${Newfilme.nome} adicionado com sucesso!`)

});

router.put("/editar/:id", (req,res) => {
    const id = req.params.id -1;
    const filmeIndex = getIndexById(id);
   
    if (filmeIndex < 0 ){
        res.status(404).send({ message:"Filme não encontrado, tente novamente."});
        return
    }

    const filmeEditado = req.body;
    
    if(!Object.keys(filmeEditado).length()){
        res.status(400).send({message:"Corpo da requisição vazio."});
        return;
    }

    const filme = getFilmesById(id);
    filmes[filmeIndex] = {
        ...filme,
        ...filmeEditado,
    };

    res.send(filmes[filmesIndex]);

});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id -1;
    const filmeIndex = getIndexById(id);

    if (filmeIndex < 0 ){
        res.status(404).send({ message:"Filme não encontrado, tente novamente."});
        return
    }

    filmes.splice(filmeIndex, 1);
    res.send ({message: "Filme removido com sucesso!"});
})



module.exports = router;