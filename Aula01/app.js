const express = require('express');

const app = express();

//Nossos web services
app.use('/data', (req, res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();
    res.json(dataAtual);
});

app.use('/inverter/:str', (req, res) => {
    //Recupera a variável de parâmetro
    let str = req.params.str;
    //Inverte a string
    str = str.split('').reverse().join('');
    res.json({resultado: str});
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
 
    let Soma;
    let Resto;
    Soma = 0;
  if (cpf == "00000000000") return res.json ({valido:false}); 
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return res.json ({valido:false});
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return res.json ({valido:false});
    return res.json ({valido:true});

    //res.send(cpf);
});

module.exports = app;