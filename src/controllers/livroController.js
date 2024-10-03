import livro from "../models/Livro.js";

class LivroController {

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "LIVRO ATUALIZADO" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO ATUALIZAR LIVRO` })
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body)
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO CADASTRAR LIVRO` })
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id
            const livroDeletado = await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "livro excluido" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO DELETAR LIVRO` })
        }
    }


    static async listaLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO BUSCAR LIVROS` })
        }
    }

    static async listaLivroPorId(req, res) {
        try {
            const livroLista = await livro.findById(req.params.id)
            res.status(200).json(livroLista);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - FALHA AO BUSCAR LIVROS` })
        }
    }

}

export default LivroController;