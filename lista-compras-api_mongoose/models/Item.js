const {Schema, model} = require ('mongoose');

const esquema = new Schema({
    dexcricao:{
        type: String,
        required: true
    },
    unidade:{
        type: String,
        required: true
    }
});

const Item = model('Item', esquema);
module.exports = Item;