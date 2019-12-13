const itens = [{
    "descrição": "fazer alguma coisa",
    "deadline": "15/12",
    "severidade": "baixa",
    "realizada": "nao"
}

];

require('./db');
const Item = require('../models/Item');

Item.insertMany(itens, (erro, itensSalvos) => console.log('Itens salvos'));
