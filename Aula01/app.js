const express = require ('express');

const app = express();

//Nossos web services
app.use('/data', (req, res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json( dataAtual);
});

app.use('/inverter/:str', (req, res) => {
    //recupera a variavel de parâmetro
   let str = req.params.str;
   //Inverter String
   str = str.split('').reverse().join('');
   res.json(str);
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    //Deixo pra vcs
    res.send('Validador de CPF');
});



app.listen(3000, () => console.log('Servidor iniciado'))