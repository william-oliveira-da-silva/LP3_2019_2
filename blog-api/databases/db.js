const mongoose = require('mongoose');

const dbURI =  'mongodb://localhost/blog-api-dev';

mongoose
    .connect(dbURI, {useNewUrlParser: true})
    .then(() => console.log('Mongoose conectado'))
    .catch(erro => console.log(erro));