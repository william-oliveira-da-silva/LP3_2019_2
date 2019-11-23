const express = require('express');
const ListaController = require('../controllers/ListaController');

/**
 * Cria o roteador dos web services relacionados a Lista. 
 * Por meio do roteador será possível definir os nossos web services */
const router = express.Router();

/**
 * Rota para serviço: /listas
 * Verbo HTTP: GET
 */
router.get('/', ListaController.recuperarListas);

/**
 * Rota para o serviço: /listas/:id
 * Verbo HTTP: PUT
 */
router.put('/:id', ListaController.atualizar);

/**
 * Rota para o serviço: /listas/:id
 * Verbo HTTP: DELETE
 */
router.delete('/:id', ListaController.remover);

/**
 * Rota para o servidor: /listas
 * Verbo HTTP: POST
 */
router.post('/', ListaController.salvar);

/**
 * Rota para serviço: /listas/itens
 * Verbo HTTP: GET
 */
router.get('/itens', ListaController.recuperarItens);

module.exports = router;