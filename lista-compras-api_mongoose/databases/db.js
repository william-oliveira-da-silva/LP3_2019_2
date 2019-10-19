const mongoose = require ('mongoose');
const dbURI = 'mongodb://localhost/lista-compras-dv';

mongoose
    .connect(dbURI, {useNewUrlParser: true})
    .then(() => console.log('Mongoose conctado'))
    .catch(erro => console.log(erro));