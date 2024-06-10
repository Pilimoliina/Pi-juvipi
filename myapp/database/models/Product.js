module.exports = function (sequelize, DataTypes) {

    /* alias */
    let alias = "Producto";

    /* Configuracion de las columnas */
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : DataTypes.INTEGER
        },
        name: {
            type : DataTypes.STRING
        }
  	}
        /* Config de la tabla */
        let config = {
            tableName: "productos",
            timestamps: false,
            underscored: true
        }
    
        let Producto = sequelize.define(alias, cols, config);
        Producto.associate = function(models) {
            Producto.belongsTo(models.usuarios, {
                as: "usuario",
                foreignKey: "usuarios_id"
            });
    
            Producto.belongsToMany( models.comentarios, {
                 as: "comentarios",
            
                 timestamps: false
             });
        }
        
   

        return Producto;
    
}
