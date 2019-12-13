const { Schema, model } = require('mongoose');

const esquema = new Schema({
    descrição: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    severidade: {
        type: String,
        required: true
    },
    realizada: {
        type: String,
        required: true
    }
});

const Item = model('Item', esquema);
module.exports = Item;