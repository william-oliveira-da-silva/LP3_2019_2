const express = require('express');
const ListaController= require('../controllers/ListaController');

const router = express.Router();


router.get('/trabalhos', ListaController.recuperarTodas);


router.post('/trabalhos',ListaController.salvar);


router.get('/itens', ListaController.recuperarItensPorDescricao);

module.exports = router;