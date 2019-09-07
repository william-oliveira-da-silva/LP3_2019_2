const ListaModel = (sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        nome:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o nome
        }
    }, {});

    return Lista;
};

module.exports = ListaModel;