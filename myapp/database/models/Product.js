module.exports = function (sequelize, DataTypes) {

    /* alias */
    let alias = "Product";

    /* Configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        name: {
            type : dataTypes.STRING
        }
  	}
    
}
    /* Config de la tabla */
    let config = {
        tableName: "product",
        timestamps: false,
        underscored: true
    }

    let Product = sequelize.define(alias, cols, config);
    return Product;
    