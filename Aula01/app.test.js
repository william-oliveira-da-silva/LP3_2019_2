const requesicao = require('supertest');
const app = require('./app');

describe('Testa o serviço de inversão de strings', () => {
    test('Deve restornar a string original de forma invertida', async () => {
        let str = 'animal';
        /**
         * Realiza uma requisição de inversão de string, passando a palavra "animal" como parâmetro.
         * A resposta do serviço (HttpResponse) será armazenada na variável "resposta".
         */
        let resposta = await requesicao(app).get(`/inverter/${str}`);
        
        //body represenra o corpo da resposta
        //let abacaxi = resposta.body.resultado;
        let {resultado} = resposta.body; //tem que ser o mesmo nome
        /**
         * Espero que o valor da variável resuldado seja igual a "lamina"
         */
        expect(resultado).toBe('lamina');
        str = 'b';
        resposta = await requesicao(app).get(`/inverter/${str}`);
        //resultado = resposta.body.resultado;
        ({resultado} = resposta.body);
        expect(resultado).toBe('b');

        str = 'william';
        resposta = await requesicao(app).get(`/inverter/${str}`);
        //resultado = resposta.body.resultado;
        ({resultado} = resposta.body);
        expect(resultado).toBe('mailliw');
    });
});

describe('Testa o serviço de validação de CPFs', () => {
    test('Deve retornar true ao receber um CPF válido', async ()=> {
        const cpfsValidos = [
            '72850914134',
            '07136674271',
            '48471228440',
            '25337513753',
            '90258365692',
            '41663915423'
        ];
        for(let i = 0; i < cpfsValidos.length; i++){
            let resposta = await requesicao (app).get(`/cpf/${cpfsValidos[i]}`);
            // let {valido } = resposta.body;

            expect(valido).toBe(true);
        }
    });
});

test ('Deve retornar false ao receber um CPF innvalido', async () => {
    const cpfInvalidos = [
        '11727373714',
        '21375370870',
        '03082275224',
        '00000000000',
        '03082275224'
    ];
    for(let i = 0; i < cpfInvalidos.length; i++){
        let resposta = await requesicao (app).get(`/cpf/${cpfInvalidos[i]}`);
        // let {valido } = resposta.body;

        expect(valido).toBe(false);
    }
});