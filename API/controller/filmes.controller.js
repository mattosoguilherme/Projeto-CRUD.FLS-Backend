const mongoose = require('mongoose');

const FilmesService = require('../services/filmes.service');

const filmesService = new FilmesService;

class FilmesController {
    getFilmes = async (req,res) => {
        const filmes = await filmesService.findAll();
        res.send(filmes);
    };

    getFilmeById = async (req,res) =>{
        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(403).send('ID Ivanlido!');
            return;
        }
        const filme = await filmesService.findById(id);

        if(!filme){
            res.status(404).send('Filme não encontrado!');
            return;
        }
        res.status(200).send(filme);
    }

    createFilme = async (req,res) => {

        const Filme = req.body;
        const FilmeSalva = await filmesService.createFilme(Filme).then(()=> res.send({message:"Filme criado com sucesso!"})).catch(err => res.status(500).send({message:`Erro no servidor ${err}`}));  
    }

    editFilme = async (req,res) => {
        const id = req.params.id;
        const filme = req.body;
        await filmesService.editFilme(id,filme).then(() => res.status(200).send({message:'Filme atualizado com sucesso!'})).catch( err => res.status(500).send({message:`Erro no servidor: ${err}`}));

    }

    deleteFilme = async (req,res) => {
        const id = req.params.id;
        await filmesService.deleteFilme(id).then(()=> res.status(200).send({message:'Excluido com sucesso'}));
    }
};

module.exports = FilmesController;