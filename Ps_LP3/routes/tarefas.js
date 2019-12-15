const express = require('express');
const Controller = require('../controllers/Controller');

const router = express.Router();

router.get('/tarefas', Controller.recuperarItens);

router.get('/tarefas/:id', Controller.recuperar);

router.put('/tarefas', Controller.atualizar);

router.delete('/tarefas/:id', Controller.remover);

router.post('/tarefas', Controller.salvar);

module.exports = router;