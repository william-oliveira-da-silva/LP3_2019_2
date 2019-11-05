

const itens = [
    {
        "nome": "will",
        "email": "will@gmail.com",
        "senha": "aD3fgjkl"
    },
    {
        "nome": "taty",
        "email": "taty@gmail.com",
        "senha": "aD4fgjkl"
    }
    
];
require('./db')
const Item = require('../models/Item');

Item.insertMany(itens,(erro, itensSalvos) => console.log('Itens Salvos'));