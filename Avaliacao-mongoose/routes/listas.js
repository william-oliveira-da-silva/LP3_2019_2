const express = require('express');
const ListaController= require('../controllers/ListaController');

const router = express.Router();


router.post('/',ListaController.salvar);

router.get('/usuarios', ListaController.recuperarItens);

module.exports = router;