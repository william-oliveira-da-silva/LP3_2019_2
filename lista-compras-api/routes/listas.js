const express = require('express');
const ListaController= require('../controllers/ListaController');

/** 
 * Cria o roteador dos web services relacionados a Lista. 
 * Por meio do roteador sera possivel definir os nossos web seervices.
 */
const router = express.Router();

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/', ListaController.recuperarTodas);

/**
 * Rota para o serviço: /listas
 * Verbo HTTP: POST
 */
//algo novo no servidor
router.post('/',ListaController.salvar);
module.exports = router;