const ItemModel = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        titulo:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o nome
        },

        orientador:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o unidade
        }
                
    }, {});

    return Item;
};

module.exports = ItemModel;