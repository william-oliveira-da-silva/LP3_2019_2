const Tarefa = require('../models/Item');


const controller = {

   recuperaTarefa: async(req, res) => {
      const blogs = await Blog.find();
      return res.json(blogs);

   },

    salvar: (req, res) => {
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

    atualizar: (req, res) =>{
        const { id } = req.params;
        const tarefa = req.body;

        Tarefa
        .findByIdAndUpdate(id, tarefa)
        .exec()
        .then(Atualizada => {

          
           if(Atualizada){
              res.json({mensagem: "Tarefa Atualizada"})
           }else{
              res.status(404).json({ mensagem: "Tarefa não encontrada"})
           }
        }) 
        .catch(erro =>{
           console.log(erro);
           res.status(500).json({mensagem: 'Erro ao tentar atualizar a tarefa'})
        }); 
   },
   remover: (req, res) => {
    const { id } = req.params;

    Tarefa
    .findByIdAndRemove( id )
    .exec()
    .then( 
      () => res.status(204).end(),
      erro => {
         console.log(erro)
      }
      )
    .catch(erro => {
       console.log(erro);
       res.status(500).json({mensagem: 'Erro ao tentar remover Tarefa'})
    });

 }


};

module.exports = controller;