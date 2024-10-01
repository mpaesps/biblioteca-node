import express from "express";

const app = express();
app.use(express.json()); //middleware acesso as reqiuiçoes e respostas e fazer açoes nela

const livros = [
    {
        "id" : 1,
        "titulo" : "Crepúsculo"
    },
    {
         "id" : 2,
        "titulo" : "Maus"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("oiiiiii");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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