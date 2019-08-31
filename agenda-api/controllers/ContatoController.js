/*
* contato de testes apenas para prototipação
*/

const Contato = require ('../models/Contato');
let contatos = [];
const controller = {
    //Arrow function
    recuperarTodas: (req, res) =>  res.json(contatos),
     salvar: (req, res) => {
        const nome = req.body.nome;
        const telefone = req.body.telefone;
        /**
         * verifica se foi informado
         * o nome da contato
         */
        if(nome, telefone){
            let contato = new Contato(nome , telefone);
            contatos.push(contato);
            res.status(201).json(contato);

        } else {
            res.status(400).json({mensagemErro : 'informe o nome e o telefone'});
        }
     }

};
module.exports = controller;



