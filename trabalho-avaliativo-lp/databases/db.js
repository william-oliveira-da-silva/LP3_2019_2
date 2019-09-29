const Sequelize = require('sequelize');

const dbConfig = require('./config');
const ListaModel = require('../models/ListaModel');
const ItemModel = require ('../models/ItemModel')

const modo = process.env.NODE_ENV || 'development';

const config = dbConfig[modo];

const conexao = new Sequelize(
    config.db,
    config.user,
    config.password, {
    host: config.host,
    dialect: config.dialect
}
);


const Lista = ListaModel(conexao, Sequelize);
const Item = ItemModel(conexao, Sequelize);
conexao
    .sync({ alter: true })
    .then(() => console.log('BD conectado e sincronizado'));

const db = { Lista, Item};

module.exports = db;