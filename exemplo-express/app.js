const express = require ('express');

//Constante que controla nooso app
const appp = express();

appp.use('/', (req, res) => res.send('Fala, galera !')
);

appp.listen(3000, () => console.log ('Servidor iniciado'));