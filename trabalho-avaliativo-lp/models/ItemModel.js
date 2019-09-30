const ItemModel = (sequelize, DataTypes, DateOnly) => {
    const Item = sequelize.define('Item', {
        titulo:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        orientador:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        estudante1:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        area:{
            type: DataTypes.STRING, 
            allowNull: false 
        },
        dataSubmissao:{
            type: DataTypes.DATEONLY, 
            allowNull: false 
        }
    }, {});

    return Item;
};

module.exports = ItemModel;