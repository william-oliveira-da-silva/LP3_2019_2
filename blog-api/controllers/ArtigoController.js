const Artigo = require('../models/Artigo');
const Arquivo = require('../models/Arquivo');

const controller = {

    recuperarArtigos: async (req, res) => {
        const artigos = await Artigo.find();
        return res.json(artigos);
    },

    recuperarItens: async (req, res) => {
        const { filtro } = req.body;
        const itens = await Arquivo.find();
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { titulo, texto } = req.body;
        if (titulo, texto) {
            const artigo = req.body;
            Artigo
            .create(artigo)
            .then(artigoSalva => res.status(201).json(artigoSalva))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar o artigo'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Seu texto ou titulo não informado'});
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const artigo = req.body;

        Artigo
            .findByIdAndUpdate(id, artigo)
            .exec()
            .then(artigoAtualizada => {
                
                if(artigoAtualizada){
                    res.json({mensagem: 'Artigo atualizda'});
                } else {
                    res
                        .status(404)
                        .json({ mensagem: 'Artigo não encontrada' });
                }
            })
            .catch(erro => { console.log(erro)});
            res
                .status(500)
                .json({ mensagem: 'Erro ao tentar atualizar o artigo' });
    },

    remover: (req, res) => {
        const { id } = req.params;

        Artigo.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(204).end(),
        erro => {
            console.log(erro);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({
                mensagem: 'Erro ao tentar remover o artigo'
            });
        });
    }
};

module.exports = controller;