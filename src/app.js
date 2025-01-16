import express from "express";
import cors from 'cors';

//Criar o objeto express
const app = express();

//Configurando o express. No caso, estou pedindo para ele utilizar 
//o conversor Json do próprio express
app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
    res.status(200).send("Versão 1.0.0");
});

export default app;