const Tarefa = require('../models/Tarefa');
const Item = require('../models/Item');

const controller = {

    recuperarTarefas: async (req, res) => {
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },

    recuperarItens: async (req, res) => {
        const itens = await Item.find({ descricao: { $regex: '', $options: 'i' } 
        });
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { descricao } = req.body;
        const { severidade} = req.body;
        const { deadline} = req.body;
        if (descricao && deadline && severidade) {
            const tarefa = req.body;
            Tarefa
            .create(tarefa)
            .then(salvarTarefa => res.status(201).json(salvarTarefa))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar a tarefa'});
            });
        } else {
            return res.status(400).json({ mensagem: 'Descrição, deadline ou severidade não informado'});
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const tarefa = req.body;

        Tarefa
            .findByIdAndUpdate(id, tarefa)
            .exec()
            .then(tarefaAtulizado => {
                
                if(tarefaAtulizado){
                    res.json({mensagem: 'Tarefa atualizada'});
                } else {
                    res
                        .status(404)
                        .json({ mensagem: 'Tarefa não encontrada' });
                }
            })
            .catch(erro => { console.log(erro)});
            res
                .status(500)
                .json({ mensagem: 'Erro ao tentar atualizar a tarefa' });
    },

    remover: (req, res) => {
        const { id } = req.params;

        Tarefa.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(204).end(),
        erro => {
            console.log(erro);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({
                mensagem: 'Erro ao tentar remover a tarefa'
            });
        });
    }
};

module.exports = controller;