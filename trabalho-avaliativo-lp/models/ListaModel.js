const ListaModel = (sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        titulo:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o nome
        },
        orientador:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o nome
        }
    }, {});

    return Lista;
};

module.exports = ListaModel;