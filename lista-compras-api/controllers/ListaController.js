/**
 * Este import é um exemplo de associação por desestruturação.
 */
const {Op} = require ('sequelize');
const { Lista, Item} = require('../databases/db');

const controller = {
    //Arrow function
    //somente leitura
    recuperarTodas: async (req, res) => {
        const listas = await Lista.findAll();
        return res.json(listas);
    },
    //altera o banco de dados
    salvar: (req, res) => {
        const lista = req.body;

        if (!lista.nome) {
            return res
                .status(400)
                .json({ mensagem: 'Nome não informado' });
        }

        Lista
            .create(lista)
            .then(
                listaSalva => res.status(201).json(listaSalva),
                erro => res.status(400).json(erro)
            )// then => erro de validação
            .catch(erro => {
                console.log(erro);
                return res
                    .status(500)
                    .json({ mensagem: 'erro ao tentar salvar a lista' });
            });// catch => exceção
    },

    recuperarItensPorDescricao: async (req, res) => {
        //const consulta = req.body.consulta;
        const {consulta} = req.body;
        let itens = await Item.findAll({
            where:{
                descricao: {
                    [Op.iLike]: `%${consulta}%`
                }
            }
        });
        return res.json(itens);

    }
};
module.exports = controller;