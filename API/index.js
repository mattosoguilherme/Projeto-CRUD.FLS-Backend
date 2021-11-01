const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors);
const filmesRouter = require('./routes/filmes.routes');

app.get("/",(req,res)=> res.send("ola professor"))
app.use("/filmes", filmesRouter)

const port = 3000;
app.listen(port, () => console.log(`App rodando. http://localhost:3000/filmes`) );