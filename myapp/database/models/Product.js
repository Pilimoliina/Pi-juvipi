module.exports = function (sequelize, DataTypes) {

    /* alias */
    let alias = "Producto";

    /* Configuracion de las columnas */
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idUsuario:{
            type: DataTypes.STRING
        },
        fotoproducto:{
            type: DataTypes.STRING
        },
        nombreProducto:{
            type: DataTypes.STRING
        },
        descripcionProducto:{
            type: DataTypes.STRING
        },
        createdAt:{
            type: DataTypes.DATE
        },
        updatedAt:{
            type: DataTypes.DATE
        },
        deletedAt:{
            type: DataTypes.DATE
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
            Producto.belongsTo(models.Usuario, {
                as: "usuario",
                foreignKey: "usuarios_id"
            });
    
            Producto.hasMany(models.Comentario, {
                 as: "comentarios",
                 foreignKey: "productos_id"
             });
        }
        
   

        return Producto;
    
}
