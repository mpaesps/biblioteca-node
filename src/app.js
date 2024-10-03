import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
    console.error("erro de conexao", erro);
})

conexao.once("open", () =>{
    console.log("Conexão com banco estabelecida")
})

const app = express();
routes(app)


export default app;

//callback function

