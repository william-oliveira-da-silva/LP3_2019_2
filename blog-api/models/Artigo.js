const { Schema, model, ObjectId } = require('mongoose');

const esquema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    itens: [
        {
            type: ObjectId,
            ref: 'Arquivo'
        }
    ]
});

const Artigo = model('Artigo', esquema);
module.exports = Artigo;