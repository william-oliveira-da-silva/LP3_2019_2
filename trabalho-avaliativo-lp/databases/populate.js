const { Item } = require('./db');

const itens = [{
    "titulo": "Custo Efetivo Total",
    "orientador": "João",
    "estudante1": "Joana",
    "area": "CET"
},
{
    "titulo": "Engenharia Assistida por Computador",
    "orientador": "Lúcia",
    "estudante1": "Laura",
    "area": "CAE"
},
{
    "titulo": "Especificação de Intercâmbio de Metadados",
    "orientador": "Adilson",
    "estudante1": "Joaquim",
    "area": "MDIS"
},
{
    "titulo": "Centro de Ciências Humanas, Sociais e Agrárias",
    "orientador": "Feraz",
    "estudante1": "Alex",
    "area": "CHCSA"
},
{
    "titulo": "Comunicação Brasil Sat",
    "orientador": "Pedro",
    "estudante1": "Alana",
    "area": "CBS"
},
{
    "titulo": "Formação Inicial e Continuada",
    "orientador": "Juliana",
    "estudante1": "Roberto",
    "area": "FIC"
}];

const salvalItens = async () => {
    await require('./db');

    for (let i = 0; i < itens.length; i++){
        await Item.create(itens[i]);
    }
};

salvalItens();