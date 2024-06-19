import express from "express";
import cors from "cors";
import db from "./config/db.js";
import acomodacaoRouter from "./routes/acomodacaoRoutes.js";
import clienteRouter from "./routes/clienteRoutes.js";
import dependenteRouter from "./routes/dependenteRoutes.js";
import documentoRouter from "./routes/documentoRoutes.js";
import enderecoRouter from "./routes/enderecoRoutes.js";
import vincularRouter from "./routes/vincularRoutes.js";
import telefoneRouter from "./routes/telefoneRoutes.js";

try{
    db.authenticate().then(()=>{
        db.sync({force:true})
        console.log('Banco de Dados Conectado.');
    });
}catch(error){
    console.error('Erro ao tentar conectar:',error);
}

const app = express();

app.use(cors());

app.use(express.json());

app.use("/acomodacao", acomodacaoRouter);

app.use("/cliente", clienteRouter);

app.use("/dependente", dependenteRouter);

app.use("/documento", documentoRouter);

app.use("/endereco", enderecoRouter);

app.use("/vincular", vincularRouter);

app.use("/telefone", telefoneRouter);


app.listen(5000, ()=> console.log(`Servidor rodando na 5000.`));