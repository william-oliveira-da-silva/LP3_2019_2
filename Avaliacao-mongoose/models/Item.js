const {Schema, model} = require ('mongoose');

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
    ConfirmacaoSenha:{
        type: String,
        required: true
    }
});

const Item = model('Item', esquema);
module.exports = Item;