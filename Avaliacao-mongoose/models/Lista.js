const {Schema, model, ObjectId} = require ('mongoose');

const esquema = new Schema({
    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
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

const Lista = model ('Lista', esquema);
module.exports = Lista;