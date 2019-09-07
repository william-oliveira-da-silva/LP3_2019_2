const config = {
    'development': {
        db: 'lista_compras_dev',
        user: 'postgres',
        password: 'ifms',
        host: 'localhost',
        dialect: 'postgres',
        port: 5434

    },
    'test': {
        db: 'lista_compras_test',
        user: 'postgres',
        password: 'ifms',
        host: 'localhost',
        dialect: 'postgres',
        port: 5434 //port : 5434 => por causa do lab, ele não esta acessando a porta padrão
    }
};

 module.exports = config;