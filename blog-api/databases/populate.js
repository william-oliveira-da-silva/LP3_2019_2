const itens = [{
    "titulo": "Ser ou nao ser",
    "texto": " nada nada nada"
}

];

require('./db');
const Arquivo = require('../models/Arquivo');

Arquivo.insertMany(itens, (erro, itensSalvos) => console.log('Arquivos salvos'));
