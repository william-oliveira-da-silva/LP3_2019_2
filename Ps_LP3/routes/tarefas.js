const express = require('express');
const Controller = require('../controllers/TarefaController');

const router = express.Router();

router.get('/tarefas/:id', Controller.recuperar);

router.put('/tarefas', Controller.atualizar);

router.delete('/tarefas/:id', Controller.remover);

router.post('/tarefas', Controller.salvar);

router.get('/tarefas', Controller.recuperarItens);

module.exports = router;