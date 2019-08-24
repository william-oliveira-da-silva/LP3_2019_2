const express = require('express');
const ListaController= require('../controllers/ListaController');

/** 
 * Cria o roteador dos web services relacionados a Lista. 
 * Por meio do roteador sera possivel definir os nossos web seervices.
 */
const router = express.Router();

/**
 * Rota para o serviço: /lista
 * Verbo HTTP: GET
 */
router.get('/listas', ListaController.recuperarTodas);

module.exports = router;