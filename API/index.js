// Importando framework Express que traz consigo alguns métodos HTTP 
// (GET, PUT, POST, DELETE, etc...) que são úteis para construção da API
const express = require('express');

// Importando CORS (Cross-Oring Resource Sharing) para que seja possivel
//  o compartilhamento de recursos entre origens destintas com segurança.
const cors = require('cors');

// Importando conexão com o banco de dados para ser inicializada no index
const Conn = require("../API/conn/conn");

// Importando rotas do CRUD
const FilmesRouter = require("../API/routes/filmes.routes");

// Inserindo o framework numa constante para que possa ser utilizado
const app = express();

// Configurando APP para fazermos requisições e trafegar dados em JSON, jutamente
//  com compartilhamento desses recursos entre origens distintas.
app.use(express.json());
app.use(cors());

// Inicializando conexão com o banco de dados
Conn();

// Rotas das requisições utilizadas na API
app.use("/filmes",FilmesRouter);

// Definindo porta do servidor backend
const port = process.env.PORT || 3001;

// Inicializando aplicação na porta pré-definida através dessa função listen.
app.listen(port,()=>console.log(`App rodando: http://localhost:${port}/filmes`));