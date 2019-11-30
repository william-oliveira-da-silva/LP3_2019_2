const { Schema, model } = require('mongoose');

const esquema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true
    }
});

const Arquivo = model('Arquivo', esquema);
module.exports = Arquivo;