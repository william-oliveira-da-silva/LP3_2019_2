const express = require('express');
const ArtigoController = require('../controllers/ArtigoController');


const router = express.Router();


router.get('/artigos', ArtigoController.recuperarArtigos);


router.put('/artigos/:id', ArtigoController.atualizar);


router.delete('/artigos/:id', ArtigoController.remover);


router.post('/artigos', ArtigoController.salvar);

router.get('/itens', ArtigoController.recuperarItens);

module.exports = router;