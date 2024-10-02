import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js"
import mongoose from "mongoose";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) =>{
    console.error("erro de conexao", erro);
})

conexao.once("open", () =>{
    console.log("Conexão com banco estabelecida")
})

const app = express();
app.use(express.json()); //middleware acesso as reqiuiçoes e respostas e fazer açoes nela

app.get("/", (req, res) => {
    res.status(200).send("oiiiiii");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado!")
    });

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).json(livros);
})

export default app;

//callback function

