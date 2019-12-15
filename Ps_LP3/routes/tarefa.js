const express = require('express');
const controllers = require('../controllers/Controllers');
const router = express.Router();


router.get('/tarefas', controllers. recuperaTarefa);
router.get('/tarefas/:id', Controller. recuperaTarefa);
router.post('/tarefas',controllers.salvar);
router.put('/tarefas', controllers.atualizar);
router.delete('/tarefas/:id', controllers.remover);

module.exports = router;