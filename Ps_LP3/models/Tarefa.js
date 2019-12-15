const { Schema, model, ObjectId } = require('mongoose');

const esquema = new Schema({
    descricao: {
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
    },
     itens: [
        {
            type: ObjectId,
            ref: 'Item'
        }
    ]
});

const Tarefa = model('Tarefa', esquema);
module.exports = Tarefa;