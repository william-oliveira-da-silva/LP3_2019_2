const ItemModel = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        descricao:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o nome
        },

        unidade:{
            type: DataTypes.STRING, 
            allowNull: false // É obrigatorio o unidade
        }
                
    }, {});

    return Item;
};

module.exports = ItemModel;