const Lista = require('../models/Lista');
const Item = require('../models/Item');

const controller = {

    recuperarItens: async (req, res) => {
        const { filtro } = req.body;
        const itens = await Item.find({
            descricao: { '$regex': filtro, '$options': 'i' }
        });
        return res.json(itens);
    },

    salvar: (req, res) => {
        const { nome } = req.body;
        if (nome) {
            const lista = req.body;
            Lista.create(lista)
                .then(listaSalva => res.status(201).json(listaSalva))
                .catch(erro => {
                    console.log(erro);
                    res.status(500).json({
                        mensagem: 'Erro ao tentar salvar lista'
                    })
                });
        } else {
            return res.status(400).json({ mensagem: 'Nome nao informado' });
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const lista = req.body;



        Lista.
            findByIdAndUpdate(id, lista)
            .exec()
            .then(listaAtualizada => {
                /**
                 * Se encontrou a lista e
                 * à atualizou ....
                 */
                if (listaAtualizada) {
                    res.json(listaAtualizada);
                } else {
                    res
                        .status(404)
                        .json({
                            mensagem: 'Lista não encontrada'
                        });
                }
            })
            .catch(erro =>{
                console.log(erro);
                res
                    .status(500)
                    .json({
                        mensagem: 'Erro ao tentar atualizar a lista'
                    });
            });
    }
};
module.exports = controller;

