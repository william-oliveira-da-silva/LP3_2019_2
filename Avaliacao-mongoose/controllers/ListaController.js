const Lista = require('../models/Lista');
const Item = require('../models/Item');

const controller = {

    recuperarItens: async (req, res)=>{
        const {filtro} = req.body;
        const itens = await Item.find({
            nome: {'$regex':filtro, '$options': 'i'},
            email: {'$regex':filtro, '$options': 'i'}
        });
        return res.json(itens);
    },

    salvar: (req, res) => {
       const {nome, senha, email, ConfirmacaoSenha} = req.body;
       if(nome){
            const lista = req.body;
            Lista.create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar lista' })
            });
       }else{
           return res.status(400).json({mensagem: 'Nome nao informado'});
       }
       if(senha){
            const lista = req.body;
            Lista.create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar usuario' })
            });
       }else{
           return res.status(400).json({mensagem: 'senha nao informado'});
       }
       if(email){
            const lista = req.body;
            Lista.create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar usuario' })
            });
       }else{
           return res.status(400).json({mensagem: 'email nao informado'});
       }
       if(senha != ConfirmacaoSenha){
            const lista = req.body;
            Lista.create(lista)
            .then(listaSalva => res.status(201).json(listaSalva))
            .catch(erro => {console.log(erro);
            res.status(500).json({ 
                mensagem: 'Erro ao tentar salvar usuario' })
            });
       }else{
           return res.status(400).json({mensagem: 'SENHA incorreta'});
       }
    }
};
module.exports = controller;

