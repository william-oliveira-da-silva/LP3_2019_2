const config = {
    'development': {
        db: 'lista_compras_dev',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres'

    },
    'test': {
        db: 'lista_compras_test',
        user: 'dev',
        password: 'senha123',
        host: 'localhost',
        dialect: 'postgres'
    }
};

 module.exports = config;