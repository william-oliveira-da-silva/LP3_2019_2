const Tarefa = require('../models/Tarefa');
const Item = require('../models/Item');

const controller = {

    recuperar: async (req, res) => {
        const tarefas = await Tarefa.find();
        return res.json(tarefas);
    },

    recuperarTarefa: async (req, res) => {
        const itens = await Item.find({ severidade: { $regex: '', $options: 'i' } 
        });
        return res.json(itens);
    },

    salvar: (req, res) =>{
        const { descricao, deadline, severidade} = req.body;
        if (descricao ,deadline,severidade ) {
            const tarefa = req.body;
            Tarefa
            .create(tarefa)
            .then(salvar => res.status(201).json(salvar))
            .catch(erro => {
                console.log(erro);
                res.status(500).json({ mensagem: 'Erro ao tentar salvar a tarefa'});
            });
        } else {
            return res.status(400).json({ mensagem: 'descricao não informada'});
        }
    },

    atualizar: (req, res) => {
        const { id } = req.params;
        const tarefa = req.body;

        Tarefa
            .findByIdAndUpdate(id, tarefas)
            .exec()
            .then(Atulizado => {
                
                if(Atulizado){
                    res.json({mensagem: 'Tarefa atualizado'});
                } else {
                    res
                        .status(404)
                        .json({ mensagem: 'Tarefa não encontrado' });
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