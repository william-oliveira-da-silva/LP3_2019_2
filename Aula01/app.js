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
        let soma = 0;
        let mod;
        soma = 0;
    
    if (cpf == "00000000000") res.send(false);

    for (i=1; i<=9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    mod = (soma * 10) % 11;
    
        if ((mod == 10) || (mod == 11))  mod = 0;
        if (mod != parseInt(cpf.substring(9, 10)) ) res.send(false);
    
        soma = 0;
        for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
        mod = (soma * 10) % 11;
    
        if ((mod == 10) || (mod == 11))  mod = 0;
        if (mod != parseInt(cpf.substring(10, 11) ) ) res.send(false);
        res.send(true);
});



app.listen(3000, () => console.log('Servidor iniciado'))