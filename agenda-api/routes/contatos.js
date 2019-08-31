const express = require('express');
const ContatoController= require('../controllers/ContatoController');

/** 
 * Cria o roteador dos web services relacionados a Contato. 
 * Por meio do roteador sera possivel definir os nossos web seervices.
 */
const router = express.Router();

/**
 * Rota para o serviço: /conatos
 * Verbo HTTP: GET
 */
router.get('/', ContatoController.recuperarTodas);

/**
 * Rota para o serviço: /contatos
 * Verbo HTTP: POST
 */
//algo novo no servidor
router.post('/',ContatoController.salvar);
module.exports = router;