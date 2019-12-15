const mongoose = require('mongoose');

const dbURI =  'mongodb://localhost/ps_lp3';

mongoose
    .connect(dbURI, {useNewUrlParser: true})
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro));