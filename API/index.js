const express = require('express');
const cors = require('cors');
const Conn = require("../API/conn/conn");
const FilmesRouter = require("../API/routes/filmes.routes");

const app = express();
app.use(express.json());
app.use(cors());
Conn();

app.use("/filmes",FilmesRouter);


const port = process.env.PORT || 3001;
app.listen(port,()=>console.log(`App rodando: http://localhost:${port}/filmes`));